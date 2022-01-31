declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    JWT_TOKEN: string;
    STORAGE_TYPE: 's3' | 'local';
    NODE_ENV: 'production' | 'development';

    MONGOOSE_CONNECTION_STRING: string;
  }
}
