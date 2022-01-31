/// <reference types="@create-htl-typescript/types/main" />

interface BaseDocument {
  id: string;
  created_at: string;
  updated_at: string;
}

type LeanDocument<T extends BaseDocument> = RemoveObjectProperties<
  __RemoveDocumentTimestampColumns<T>,
  'id'
>;

type __DocumentTimestampColumns = `${'created' | 'updated'}_at`;

type __RemoveDocumentTimestampColumns<T extends BaseDocument> = {
  [Key in Exclude<keyof T, __DocumentTimestampColumns>]: T[Key];
};

//

type EntityDocument<
  T extends BaseDocument,
  RemoveProperties extends keyof T = never
> = {
  [Key in keyof __GetTransformedEntityDocument<
    T,
    RemoveProperties
  >]: __GetTransformedEntityDocument<
    T,
    RemoveProperties
  >[Key] extends BaseDocument
    ? EntityDocument<__GetTransformedEntityDocument<T, RemoveProperties>[Key]>
    : __GetTransformedEntityDocument<
        T,
        RemoveProperties
      >[Key] extends BaseDocument[]
    ? EntityDocument<
        GetArrayType<__GetTransformedEntityDocument<T, RemoveProperties>[Key]>
      >
    : __GetTransformedEntityDocument<T, RemoveProperties>[Key];
};

type __GetTransformedEntityDocument<
  T extends BaseDocument,
  RemoveProperties extends keyof T = never
> = IsNeverType<RemoveProperties> extends true
  ? LeanDocument<T>
  : RemoveObjectProperties<LeanDocument<T>, RemoveProperties>;
