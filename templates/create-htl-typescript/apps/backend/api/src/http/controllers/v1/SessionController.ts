import { Router } from 'express';

import { ControllerBase } from '@bases/ControllerBase';
import { LoggedMiddleware } from '@http/middlewares/LoggedMiddleware';
import { SessionLoginValidation } from '@http/validations/session/SessionLoginValidation';
import { ParserHelper } from '@infra/helpers/ParserHelper';
import { EmployeeGetService } from '@infra/services/employee/EmployeeGetService';
import { SessionLoginService } from '@infra/services/session/SessionLoginService';

class SessionController extends ControllerBase {
  constructor() {
    super('sessions');
  }

  protected load(router: Router): void {
    const loginRouter = this.newRouter();

    router.use('/login', loginRouter);

    // Login

    loginRouter.post(
      '/',
      SessionLoginValidation.make(),
      async ({ manager }, res) => {
        const sessionLogin = new SessionLoginService();
        const { token, employee } = await sessionLogin.execute(manager.data);

        const data: CreateSessionLoginHttpData = {
          token,
          employee: ParserHelper.parseEmployee(employee),
        };

        res.json(data);
      },
    );

    loginRouter.use(LoggedMiddleware.make());

    loginRouter.get('/verify', (_req, res) => {
      res.send({ ok: true });
    });

    loginRouter.get('/@me', async ({ manager: { authenticated } }, res) => {
      const employeeGet = new EmployeeGetService();
      const employee = await employeeGet.execute(authenticated.id);

      const data: GetSessionMeHttpData = employee;

      res.json(data);
    });
  }
}

export default SessionController;
