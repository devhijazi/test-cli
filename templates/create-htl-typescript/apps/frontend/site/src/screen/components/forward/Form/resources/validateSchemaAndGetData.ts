import type { BaseSchema, ValidationError } from 'yup';

import type { Data } from '../types';

interface ValidatedInfo {
  data: Data;
  error?: ValidationError;
}

export async function validateSchemaAndGetData(
  data: Data,
  schema?: BaseSchema,
): Promise<ValidatedInfo> {
  if (!schema) {
    return {
      data,
    };
  }

  try {
    const validatedData = await schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    return {
      data: validatedData,
    };
  } catch (error) {
    return {
      data,
      error,
    };
  }
}
