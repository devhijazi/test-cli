import cors from 'cors';
import express from 'express';

import { ControllersManager } from './ControllersManager';

import { app } from '@/app';
import { APIError } from '@core/errors/APIError';
import { ErrorMiddleware } from '@http/middlewares/ErrorMiddleware';
import { RequestMiddleware } from '@http/middlewares/RequestMiddleware';
import { ResponseTimeMiddleware } from '@http/middlewares/ResponseTimeMiddleware';
import { getRootPath } from '@utils/path';

export class APIManager {
  public connect(): void {
    const { PORT } = process.env;
    const controllersManager = new ControllersManager();

    app.use(cors());
    app.use(RequestMiddleware.make());
    app.use(ResponseTimeMiddleware.make());

    // application routes
    app.use(controllersManager.createRouter([1]));

    app.use('/static', express.static(getRootPath('public')));

    app.all('*', () => {
      throw new APIError('A rota não existe.', {
        code: 404,
        name: 'NotFound',
      });
    });

    // handle errors middleware
    app.use(ErrorMiddleware.make());

    app.listen(PORT, () => {
      console.log(`server is running on port "${PORT}"`); // eslint-disable-line no-console
    });
  }
}
