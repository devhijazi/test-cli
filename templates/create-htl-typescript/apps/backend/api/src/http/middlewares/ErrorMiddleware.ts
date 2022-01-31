import { Request, Response, NextFunction } from 'express';

import { ErrorBase } from '@bases/ErrorBase';
import { MiddlewareBase, buildMiddleware } from '@bases/MiddlewareBase';

class Middleware extends MiddlewareBase {
  execute(error: any, _req: Request, res: Response, _next: NextFunction): void {
    if (error instanceof ErrorBase) {
      res.status(error.code).json(error.toObject());
      return;
    }

    if (process.env.NODE_ENV === 'development') {
      console.error((error && error.stack) || error); // eslint-disable-line no-console
    }

    res.status(500).json({ message: 'Internal server error' });
  }
}

export const ErrorMiddleware = buildMiddleware(Middleware);
