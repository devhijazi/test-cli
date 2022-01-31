import { Request, Response, NextFunction } from 'express';

import { OutgoingHttpHeaders } from 'http';

import { MiddlewareBase, buildMiddleware } from '@bases/MiddlewareBase';

class Middleware extends MiddlewareBase {
  execute(_req: Request, res: Response, next: NextFunction): void {
    const startInMilliseconds = Date.now();
    const defaultWriteHead = res.writeHead.bind(res);

    const writeHead = (
      statusCode: number,
      reasonPhrase?: string | undefined,
      headers?: OutgoingHttpHeaders | undefined,
    ): Response<any> => {
      const requestDuration = Date.now() - startInMilliseconds;

      res.setHeader('X-Response-Time', requestDuration);
      return defaultWriteHead(statusCode, reasonPhrase, headers);
    };

    res.writeHead = writeHead as any;

    next();
  }
}

export const ResponseTimeMiddleware = buildMiddleware(Middleware);
