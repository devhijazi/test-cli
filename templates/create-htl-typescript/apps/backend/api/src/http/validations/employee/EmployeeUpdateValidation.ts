import { object, string, number, YupObjectSchemaType } from 'yup';

import { buildValidation } from '@core/builders/validation';

type SchemaType = YupObjectSchemaType<EmployeeUpdateData>;

export const EmployeeUpdateValidation = buildValidation(
  object<SchemaType>({
    phone: string().nullable(),
    password: string().nullable(),
    full_name: string().nullable(),
    email: string().email().nullable(),
    permission: number().nullable().equals([0, 1, 2]).default(0),
  }),
);
