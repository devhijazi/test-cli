import { Request, Response, NextFunction } from 'express';

import { MiddlewareBase, buildMiddleware } from '@bases/MiddlewareBase';
import { InvalidError } from '@core/errors/InvalidError';

interface Options {
  permission: Employee['permission'];
}

class Middleware extends MiddlewareBase<Options> {
  execute({ manager }: Request, _res: Response, next: NextFunction): void {
    const { permission = 0 } = this.options;

    if (!(manager.authenticated.permission >= permission)) {
      throw new InvalidError(
        'Você não possui permissões suficientes para acessar essa rota.',
        { code: 403 },
      );
    }

    next();
  }
}

export const PermissionMiddleware = buildMiddleware(Middleware);
