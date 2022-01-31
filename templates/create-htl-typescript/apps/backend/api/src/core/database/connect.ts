import { createConnection, Connection, ConnectionOptionsReader } from 'typeorm';

export async function connect(): Promise<Connection> {
  const connectionOptionsReader = new ConnectionOptionsReader({
    root: process.cwd(),
  });

  const options = await connectionOptionsReader.get(
    process.env.TYPEORM_CONNECTION || 'default',
  );

  return createConnection(options);
}
