import { hash, compare } from 'bcryptjs';

import { InvalidError } from '@core/errors/InvalidError';

export class PasswordHelper {
  private static get hashSalt(): number {
    return 10;
  }

  public static verify(password: string): boolean {
    return /^.{8,}$/.test(password);
  }

  public static encrypt(password: string): Promise<string> {
    return hash(password, this.hashSalt);
  }

  public static generate(password: string): Promise<string> {
    const makedPassword = this.castPassword(password);

    return this.encrypt(makedPassword);
  }

  public static castPassword(password: string): string {
    if (!this.verify(password)) {
      throw new InvalidError('A senha inserida não cumpre os requisitos.');
    }

    return password;
  }

  public static async compare(
    password: string,
    passwordHash: string,
  ): Promise<void> {
    const passwordMatched = await compare(password, passwordHash);

    if (!passwordMatched) {
      throw new InvalidError('A senha inserida está incorreta.');
    }
  }
}
