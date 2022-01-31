import { Router } from 'express';

import { ControllerBase } from '@bases/ControllerBase';
import { getFolderModules } from '@utils/getFolderModules';
import { getPath } from '@utils/path';

export class ControllersManager {
  private readonly router = Router();

  public createRouter(versions: number[]): Router {
    /* eslint-disable no-restricted-syntax */
    for (const version of this.parseVersions(versions)) {
      const controllers = this.makeControllers(version);

      for (const controller of controllers) {
        const { router, baseUrl } = controller.build();

        this.router.use(`/${version}/${baseUrl}`, router);
      }
    }

    return this.router;
    /* eslint-enable no-restricted-syntax */
  }

  private parseVersions(versions: number[]): string[] {
    return versions.map(
      version => `v${version.toString().replace(/([^0-9])/g, '')}`,
    );
  }

  private makeControllers(version: string): ControllerBase[] {
    return getFolderModules(getPath('http', 'controllers', version)).map(
      Controller => new Controller(),
    );
  }
}
