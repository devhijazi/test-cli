/// <reference types="@sima/types/main" />
/// <reference types="@sima/types/model" />

/// <reference path="../mixin.d.ts" />

type __Employee = EntityDocument<Employee, 'avatar'>;

// Create

type EmployeeCreateReturnData = string;

type EmployeeCreateData = __Employee;

// List

type EmployeeListReturnData = PaginateReturnData<EmployeeHealthy>;

type EmployeeListData = PaginateData;

// Update

type EmployeeUpdateData = NullableObject<__Employee>;
