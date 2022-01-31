import { cloneObject, removeProperties } from '@sima/utils';

export class ParserHelper {
  public static parseEmployee(employeeData: Employee): EmployeeHealthy {
    return removeProperties(employeeData, ['password']);
  }

  public static parseCustomer(customerData: Customer): CustomerHealthy {
    return cloneObject(customerData);
  }
}
