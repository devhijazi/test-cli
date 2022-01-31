import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

let API_CACHED: AxiosInstance | undefined;

export const CURRENT_VERSION = 'v1';

export const api = build();

function build(): AxiosInstance {
  if (!API_CACHED) {
    API_CACHED = axios.create(makeConfig());
  }

  return API_CACHED;
}

function makeConfig(): AxiosRequestConfig {
  const {
    NODE_ENV,
    REACT_APP_API_URL = `http://localhost:3333/${CURRENT_VERSION}`,
  } = process.env;

  return {
    baseURL:
      NODE_ENV !== 'production'
        ? REACT_APP_API_URL
        : `https://api.domainurl.com.br/${CURRENT_VERSION}`,
  };
}
