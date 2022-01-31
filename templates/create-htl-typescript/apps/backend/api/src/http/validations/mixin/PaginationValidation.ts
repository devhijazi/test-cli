import { number, string, object, YupObjectSchemaType } from 'yup';

import { buildValidation } from '@core/builders/validation';

type SchemaType = YupObjectSchemaType<PaginateData>;

export const PaginationValidation = buildValidation(
  object<SchemaType>({
    page: number(),
    itemsPerPage: number(),
    search: string(),
  }),
);
