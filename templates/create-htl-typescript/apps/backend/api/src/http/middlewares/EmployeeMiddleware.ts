import { Request, Response, NextFunction } from 'express';

import { MiddlewareBase, buildMiddleware } from '@bases/MiddlewareBase';
import { EmployeeRepository } from '@core/database/models/Employee';
import { InvalidError } from '@core/errors/InvalidError';

class Middleware extends MiddlewareBase {
  async execute(
    { manager, params: { id: employeeId } }: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    const employee = await EmployeeRepository.findOne(employeeId);

    if (!employee) {
      throw new InvalidError(
        'Nenhum funcionário encontrado com o id inserido.',
      );
    }

    manager.setEmployee(employee);
    next();
  }
}

export const EmployeeMiddleware = buildMiddleware(Middleware);
