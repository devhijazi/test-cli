import { EmployeeRepository } from '@core/database/models/Employee';

export class EmployeeDeleteService implements Service {
  async execute(employee: Employee): Promise<void> {
    await EmployeeRepository.delete(employee.id);
  }
}
