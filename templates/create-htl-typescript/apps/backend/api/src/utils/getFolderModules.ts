import { readdirSync } from 'fs';
import { join } from 'path';

export function getFolderModules<T = any>(folderPath: string): T[] {
  return readdirSync(folderPath)
    .map(filePath => {
      const fileRequire = require(join(folderPath, filePath)); // eslint-disable-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require

      return (fileRequire && fileRequire.default) || fileRequire;
    })
    .filter(fileModule => !!fileModule);
}
