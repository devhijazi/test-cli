import { EmployeeRepository } from '@core/database/models/Employee';

export class EmployeeCreateService implements Service {
  async execute(data: EmployeeCreateData): Promise<EmployeeCreateReturnData> {
    const employee = await EmployeeRepository.create(data).save();

    return employee.id;
  }
}
