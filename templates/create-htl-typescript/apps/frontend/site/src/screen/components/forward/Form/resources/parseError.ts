import { parseInnerErrors } from './parseInnerErrors';

const __DEV__ = process.env.NODE_ENV !== 'production';

interface ErrorParsed {
  inner?: ReturnType<typeof parseInnerErrors>;
  message: string;
}

export function parseError(error: any): ErrorParsed {
  if (__DEV__) {
    console.error(error);
  }

  const parsedData = {
    message: 'Ocorreu um erro, tente novamente em alguns minutos!',
  };

  if (error.message) {
    Object.assign(parsedData, { message: error.message });
  }

  if (error.response) {
    const { errors, handler, message } = error.response.data;

    if (typeof handler === 'string' && handler.toLowerCase() === 'validation') {
      Object.assign(parsedData, {
        inner: parseInnerErrors(errors),
      });
    }

    if (typeof message === 'string') {
      Object.assign(parsedData, { message });
    }
  }

  return parsedData as ErrorParsed;
}

/* eslint no-console: off, @typescript-eslint/explicit-module-boundary-types: off */
