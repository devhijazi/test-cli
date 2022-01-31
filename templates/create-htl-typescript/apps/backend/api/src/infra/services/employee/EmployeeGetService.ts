import { EmployeeRepository } from '@core/database/models/Employee';
import { WhereError } from '@core/errors/WhereError';
import { ParserHelper } from '@infra/helpers/ParserHelper';

export class EmployeeGetService implements Service {
  async execute(employeeId: string): Promise<EmployeeHealthy> {
    const employee = await EmployeeRepository.findOne(employeeId);

    if (!employee) {
      throw new WhereError('Nenhum funcionário encontrado com o id fornecido.');
    }

    return ParserHelper.parseEmployee(employee);
  }
}
