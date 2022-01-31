/// <reference types="@sima/types/model" />

// Login

interface SessionLoginReturnData {
  token: string;
  employee: Employee;
}

interface SessionLoginData {
  email: string;
  password: string;
}
