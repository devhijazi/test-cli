import { sign, verify, decode, SignOptions } from 'jsonwebtoken';

import { InvalidError } from '@core/errors/InvalidError';

export abstract class BaseTokenHelper {
  protected static get token(): string {
    throw new Error('Instance not implement jwt token.');
  }

  public static verify(token: string): boolean {
    try {
      verify(token, this.token);
      return true;
    } catch {
      return false;
    }
  }

  public static create(
    payload: string | Record<string, any> | Buffer,
    options?: SignOptions,
  ): string {
    return sign(payload, this.token, options);
  }

  public static decode(token: string): any {
    const isValid = this.verify(token);

    if (!isValid) {
      throw new InvalidError('O token inserido não é valido.', { code: 403 });
    }

    return decode(token);
  }
}
