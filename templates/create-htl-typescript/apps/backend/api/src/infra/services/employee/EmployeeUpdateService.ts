import { EmployeeRepository } from '@core/database/models/Employee';
import { WhereError } from '@core/errors/WhereError';

export class EmployeeUpdateService implements Service {
  async execute(
    employeeId: string,
    { password, permission: _permission, ...data }: EmployeeUpdateData,
  ): Promise<void> {
    const employee = await EmployeeRepository.findOne(employeeId);

    if (!employee) {
      throw new WhereError('Nenhum funcionário encontrado com o id fornecido.');
    }

    if (password) {
      employee.password = password;

      await EmployeeRepository.save(employee);
    }

    await EmployeeRepository.update(employeeId, data as any);
  }
}
