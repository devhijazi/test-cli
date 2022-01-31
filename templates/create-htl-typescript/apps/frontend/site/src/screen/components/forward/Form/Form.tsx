import {
  FormHandles as UnformHandles,
  FormHelpers as UnformHelpers,
} from '@unform/core';
import { Form as Unform } from '@unform/web';
import {
  useRef,
  useReducer,
  forwardRef,
  useCallback,
  useImperativeHandle,
  Ref,
} from 'react';

import { Error } from './components/Error';
import { FormContext } from './Context';
import { reducer } from './reducer';
import { parseError } from './resources/parseError';
import { parseInnerErrors } from './resources/parseInnerErrors';
import { validateSchemaAndGetData } from './resources/validateSchemaAndGetData';
import {
  FormReducerType,
  Data,
  FormProps,
  FormHandles,
  FormState,
} from './types';

export const Form = forwardRef(
  (
    { schema, children, onSubmit, initialData = {}, ...rest }: FormProps,
    ref: Ref<FormHandles>,
  ): JSX.Element => {
    const formRef = useRef<UnformHandles>(null);
    const [state, dispatch] = useReducer(reducer, INITIAL_DATA);

    const getUnformRef = useCallback(() => formRef, []);

    const resetError = useCallback(() => {
      dispatch({ type: FormReducerType.ResetError });
    }, []);

    const validate = useCallback(async (): Promise<boolean> => {
      const data = formRef.current?.getData() ?? {};
      const validatedInfo = await validateSchemaAndGetData(data, schema);

      if (validatedInfo.error) {
        const errors = parseInnerErrors(validatedInfo.error.inner);

        formRef.current?.setErrors(errors);
        return false;
      }

      return true;
    }, [schema]);

    const handleSubmit = useCallback(
      async (data: Data, helpers: UnformHelpers): Promise<boolean> => {
        if (state.loading) {
          return false;
        }

        // Reset all form errors
        formRef.current?.setErrors({});

        dispatch({
          type: FormReducerType.AllEdit,
          payload: {
            error: undefined,
            loading: true,
          },
        });

        try {
          const validatedInfo = await validateSchemaAndGetData(data, schema);

          if (validatedInfo.error) {
            const errors = parseInnerErrors(validatedInfo.error.inner);

            formRef.current?.setErrors(errors);
            return false;
          }

          await onSubmit(validatedInfo.data, helpers);
          return true;
        } catch (error) {
          const { message, inner } = parseError(error);

          if (inner) {
            formRef.current?.setErrors(inner);
          }

          if (message) {
            dispatch({
              type: FormReducerType.SetError,
              payload: {
                error: message,
              },
            });
          }
        } finally {
          dispatch({ type: FormReducerType.StopLoading });
        }

        return false;
      },
      [schema, state.loading, formRef, onSubmit],
    );

    const safeSubmit = useCallback((): Promise<boolean> => {
      const data = formRef.current?.getData() || {};

      return handleSubmit(data, formRef.current as UnformHelpers);
    }, [handleSubmit]);

    useImperativeHandle<FormHandles, FormHandles>(
      ref,
      () => ({
        safeSubmit,
        resetError,
        validate,
        getUnformRef,
      }),
      [safeSubmit, resetError, validate, getUnformRef],
    );

    return (
      <FormContext.Provider
        value={{
          ...state,
          safeSubmit,
          resetError,
          validate,
          getUnformRef,
        }}
      >
        <Error />

        <Unform
          {...rest}
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={initialData}
        >
          {children}
        </Unform>
      </FormContext.Provider>
    );
  },
);

const INITIAL_DATA: FormState = {
  loading: false,
};
