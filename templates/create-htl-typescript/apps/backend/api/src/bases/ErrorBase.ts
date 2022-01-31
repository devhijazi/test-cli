type ErrorType = Record<string, any>[];

interface Data {
  name?: string;
  code?: number;
  errors?: ErrorType;
}

interface ErrorObject {
  code: number;
  name?: string;
  handler: string;
  message: string;
  errors: ErrorType;
}

export abstract class ErrorBase {
  declare ['constructor']: typeof ErrorBase;

  public readonly code: number;

  public readonly name?: string;

  public readonly message: string;

  public readonly errors: ErrorType;

  constructor(message: string, { name, code = 400, errors = [] }: Data = {}) {
    this.name = name;
    this.code = code;
    this.errors = errors;
    this.message = message;
  }

  get handlerName(): string {
    return this.constructor.name.replace(/Error/gi, '');
  }

  public toObject(): ErrorObject {
    return {
      code: this.code,
      handler: this.handlerName,
      message: this.message,
      errors: this.errors,
    };
  }
}
