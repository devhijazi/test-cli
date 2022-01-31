export class RequestManager {
  public data: any = {};

  public authenticated!: Employee;

  public employee!: Employee;

  public setData(data: Record<string, any>): this {
    this.data = data;
    return this;
  }

  public setAuthenticated(authenticated: Employee): this {
    this.authenticated = authenticated;
    return this;
  }

  public setEmployee(employee: Employee): this {
    this.employee = employee;
    return this;
  }
}
