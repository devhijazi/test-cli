import { mergeClassNames } from '@hitechline/reactools';
import { useField } from '@unform/core';
import {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
  FocusEventHandler,
} from 'react';
import type { IconType } from 'react-icons';
import type { Props as InputMaskProps } from 'react-input-mask';

import { Container, Content, Error, InputElement } from './styles';

import { generateRandomString } from '@modules/utils/generateRandomString';

interface Props extends Omit<InputMaskProps, 'mask' | 'onBlur'> {
  name: string;
  icon: IconType;
  label?: string;
  mask?: InputMaskProps['mask'];
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export function InputEdit({
  name,
  label,
  mask,
  onBlur,
  onFocus,
  icon: Icon,
  ...rest
}: Props): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    error,
    fieldName,
    clearError,
    defaultValue,
    registerField,
  } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [currentValue, updateCurrentValue] = useState(() => defaultValue ?? '');

  const id = useMemo(() => generateRandomString(), []);

  const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    (...props) => {
      setIsFocused(false);

      //
      onBlur?.(...props);
    },
    [onBlur],
  );

  const handleFocus: FocusEventHandler<HTMLInputElement> = useCallback(
    (...props) => {
      clearError();
      setIsFocused(true);

      //
      onFocus?.(...props);
    },
    [onFocus, clearError],
  );

  useEffect(() => {
    if (!defaultValue || currentValue !== defaultValue) {
      return;
    }

    if (inputRef.current) {
      inputRef.current.value = defaultValue;
    }

    const listener = (): void => {
      updateCurrentValue(inputRef.current?.value);
    };

    inputRef.current?.addEventListener('input', listener);

    // eslint-disable-next-line consistent-return
    return () => {
      if (!inputRef.current) {
        return;
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      inputRef.current?.removeEventListener('input', listener);
    };
  });

  useEffect(() => {
    registerField({
      ref: inputRef,
      name: fieldName,
      getValue: () => inputRef.current?.value ?? '',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      className={mergeClassNames({
        error: Boolean(error),
        focused: isFocused,
      })}
    >
      {label && (
        <label htmlFor={id}>
          <div className="icon">
            <Icon />
          </div>

          <span>{label}</span>
        </label>
      )}

      <Content>
        <InputElement
          {...rest}
          id={id}
          name={name}
          mask={mask as any}
          onBlur={handleBlur}
          onFocus={handleFocus}
          defaultValue={defaultValue}
        >
          <input ref={inputRef} />
        </InputElement>
      </Content>

      {error && (
        <Error>
          <span>{error}</span>
        </Error>
      )}
    </Container>
  );
}
