import { Router } from 'express';

import { ControllerBase } from '@bases/ControllerBase';
import { EmployeeMiddleware } from '@http/middlewares/EmployeeMiddleware';
import { LoggedMiddleware } from '@http/middlewares/LoggedMiddleware';
import { PermissionMiddleware } from '@http/middlewares/PermissionMiddleware';
import { EmployeeCreateValidation } from '@http/validations/employee/EmployeeCreateValidation';
import { EmployeeUpdateValidation } from '@http/validations/employee/EmployeeUpdateValidation';
import { PaginationValidation } from '@http/validations/mixin/PaginationValidation';
import { EmployeeCreateService } from '@infra/services/employee/EmployeeCreateService';
import { EmployeeDeleteService } from '@infra/services/employee/EmployeeDeleteService';
import { EmployeeGetService } from '@infra/services/employee/EmployeeGetService';
import { EmployeeListService } from '@infra/services/employee/EmployeeListService';
import { EmployeeUpdateService } from '@infra/services/employee/EmployeeUpdateService';

class EmployeeController extends ControllerBase {
  constructor() {
    super('employees', [
      LoggedMiddleware.make(),
      PermissionMiddleware.make({ permission: 2 }),
    ]);
  }

  load(router: Router): void {
    const employeeRouter = this.newRouter();

    router.post(
      '/',
      EmployeeCreateValidation.make(),
      async ({ manager }, res) => {
        const employeeCreate = new EmployeeCreateService();
        const employeeId = await employeeCreate.execute(manager.data);

        const data: CreateEmployeeHttpData = employeeId;

        res.send(data);
      },
    );

    router.get(
      '/list',
      PaginationValidation.make(),
      async ({ manager }, res) => {
        const employeeList = new EmployeeListService();
        const {
          count,
          pages,
          inPage,
          itemsInPage,
          itemsPerPage,
          items,
        } = await employeeList.execute(manager.data);

        const data: GetEmployeesHttpData = {
          count,
          pages,
          inPage,
          itemsInPage,
          itemsPerPage,
          items,
        };

        res.json(data);
      },
    );

    // Employee

    router.use('/:id', EmployeeMiddleware.make(), employeeRouter);

    employeeRouter.get(
      '/',
      async ({ manager: { employee: mainEmployee } }, res) => {
        const employeeGet = new EmployeeGetService();
        const employee = await employeeGet.execute(mainEmployee.id);

        const data: GetEmployeeHttpData = {
          employee,
        };

        res.json(data);
      },
    );

    employeeRouter.delete('/', async ({ manager: { employee } }, res) => {
      const employeeDelete = new EmployeeDeleteService();

      await employeeDelete.execute(employee);

      res.sendStatus(204);
    });

    employeeRouter.put(
      '/',
      EmployeeUpdateValidation.make(),
      async ({ manager: { employee, data } }, res) => {
        const employeeUpdate = new EmployeeUpdateService();

        await employeeUpdate.execute(employee.id, data);

        res.sendStatus(204);
      },
    );
  }
}

export default EmployeeController;
