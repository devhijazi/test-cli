import { ValidationError as YupValidationError } from 'yup';

import { ErrorBase } from '@bases/ErrorBase';

export class ValidationError extends ErrorBase {
  constructor(data: YupValidationError) {
    super(data.errors[0], { errors: data.inner });
  }
}
