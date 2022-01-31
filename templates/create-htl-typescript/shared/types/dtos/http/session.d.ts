/// <reference types="@sima/types/model" />

interface CreateSessionLoginHttpData {
  token: string;
  employee: EmployeeHealthy;
}

type GetSessionMeHttpData = EmployeeHealthy;
