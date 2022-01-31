import { object, string, number, YupObjectSchemaType } from 'yup';

import { buildValidation } from '@core/builders/validation';

type SchemaType = YupObjectSchemaType<EmployeeCreateData>;

export const EmployeeCreateValidation = buildValidation(
  object<SchemaType>({
    phone: string().required(),
    password: string().required(),
    full_name: string().required(),
    email: string().email().required(),
    permission: number().required().equals([0, 1, 2]).default(0),
  }),
);
