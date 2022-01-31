import { EmployeeRepository } from '@core/database/models/Employee';
import { WhereError } from '@core/errors/WhereError';
import { PasswordHelper } from '@infra/helpers/PasswordHelper';
import { SessionTokenHelper } from '@infra/helpers/token/SessionTokenHelper';

export class SessionLoginService implements Service {
  async execute({
    email,
    password,
  }: SessionLoginData): Promise<SessionLoginReturnData> {
    const employee = await EmployeeRepository.findOne({
      where: { email },
    });

    if (!employee) {
      throw new WhereError('O email inserido não está registrado.');
    }

    await PasswordHelper.compare(password, employee.password);

    return {
      employee,
      token: SessionTokenHelper.create(employee.id),
    };
  }
}
