import { Request, Response, NextFunction } from 'express';

import { MiddlewareBase, buildMiddleware } from '@bases/MiddlewareBase';
import { EmployeeRepository } from '@core/database/models/Employee';
import { InvalidError } from '@core/errors/InvalidError';
import { SessionTokenHelper } from '@infra/helpers/token/SessionTokenHelper';

class Middleware extends MiddlewareBase {
  async execute(
    req: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    const authorization = req.header('authorization');

    if (!authorization) {
      throw new InvalidError('Nenhuma autorização inserida.');
    }

    const [type, token] = authorization.split(/[ \t]+/);

    if (type.toLowerCase() !== 'bearer') {
      throw new InvalidError('Tipo de token inválido.');
    }

    if (!token) {
      throw new InvalidError('Nenhum token inserido.');
    }

    const tokenIsValid = SessionTokenHelper.verify(token);

    if (!tokenIsValid) {
      throw new InvalidError('O token inserido é inválido.', { code: 403 });
    }

    const { sub: employeeId } = SessionTokenHelper.decode(token);
    const employee = await EmployeeRepository.findOne(employeeId);

    if (!employee) {
      throw new InvalidError('O token inserido é inválido.', { code: 403 });
    }

    req.manager.setAuthenticated(employee);
    next();
  }
}

export const LoggedMiddleware = buildMiddleware(Middleware);
