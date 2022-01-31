import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'yup';

import { ValidationError } from '@core/errors/ValidationError';

class Validation {
  private schema: ObjectSchema<Record<any, any>>;

  constructor(schema: ObjectSchema<Record<any, any>>) {
    this.schema = schema;
  }

  public async execute(
    { query, body, manager }: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await this.schema.validate(Object.assign(body, query), {
        abortEarly: false,
        stripUnknown: true,
      });

      manager.setData(data);
      next();
    } catch (error) {
      throw new ValidationError(error);
    }
  }
}

interface ValidationConfig {
  make(): Validation['execute'];
}

export function buildValidation(
  schema: ObjectSchema<Record<any, any>>,
): ValidationConfig {
  function make(): Validation['execute'] {
    const validation = new Validation(schema);

    return validation.execute.bind(validation);
  }

  return {
    make,
  };
}
