import { object, string, YupObjectSchemaType } from 'yup';

import { buildValidation } from '@core/builders/validation';

type SchemaType = YupObjectSchemaType<SessionLoginData>;

export const SessionLoginValidation = buildValidation(
  object<SchemaType>({
    email: string().required().email(),
    password: string().required(),
  }),
);
