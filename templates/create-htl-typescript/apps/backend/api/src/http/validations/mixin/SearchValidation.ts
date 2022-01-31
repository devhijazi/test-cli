import { string, object, YupObjectSchemaType } from 'yup';

import { buildValidation } from '@core/builders/validation';

type SchemaType = YupObjectSchemaType<SearchData>;

export const SearchValidation = buildValidation(
  object<SchemaType>({
    search: string().required(),
  }),
);
