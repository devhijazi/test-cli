/// <reference path="./document.d.ts" />

interface Address extends BaseDocument {
  city: string;
  street: string;
  number: number;
  zip_code: string;
  neighborhood: string;
  state: string | null;
}

// Employee

type EmployeeHealthy = Omit<Employee, 'password'>;

interface Employee extends BaseDocument {
  email: string;
  password: string;
  full_name: string;
  permission: 0 | 1 | 2;
  phone: string | null;
  avatar: string | null;
}
