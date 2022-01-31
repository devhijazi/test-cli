import type {
  FormProps as UnformProps,
  FormHandles as UnformHandles,
  FormHelpers as UnformHelpers,
} from '@unform/core';
import type { RefObject } from 'react';
import type { BaseSchema } from 'yup';

export type Data = Record<any, any>;

export type FormSubmit<T = any> = (data: T, helpers: UnformHelpers) => any;

export interface FormProps extends Omit<UnformProps, 'ref' | 'onSubmit'> {
  submit?: string;
  schema?: BaseSchema<any, any>;
  onSubmit: FormSubmit;
}

export interface FormHandles {
  safeSubmit(): void;
  resetError(): void;
  validate(): Promise<boolean>;
  getUnformRef(): RefObject<UnformHandles>;
}

export interface FormState {
  error?: string;
  loading: boolean;
}

export interface FormContextData extends FormState, FormHandles {}

// Form reducer

type CreateAction<T extends string, P = undefined> = P extends undefined
  ? {
      type: T;
    }
  : {
      type: T;
      payload: P;
    };

export enum FormReducerType {
  AllEdit = 'ALL_EDIT',
  SetError = 'SET_ERROR',
  ResetError = 'RESET_ERROR',
  StopLoading = 'STOP_LOADING',
  StartLoading = 'START_LOADING',
}

export type FormReducerAction =
  | CreateAction<FormReducerType.AllEdit, Partial<FormState>>
  | CreateAction<FormReducerType.SetError, { error: string }>
  | CreateAction<FormReducerType.ResetError>
  | CreateAction<FormReducerType.StopLoading>
  | CreateAction<FormReducerType.StartLoading>;
