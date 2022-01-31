/// <reference types="@sima/types/model" />

/// <reference path="../mixin.d.ts" />

type CreateEmployeeHttpData = string;

interface GetEmployeeHttpData {
  employee: EmployeeHealthy;
}

// List

type GetEmployeesHttpData = PaginateReturnData<EmployeeHealthy>;
