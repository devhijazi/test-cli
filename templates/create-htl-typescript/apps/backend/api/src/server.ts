import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv-defaults/config';

import { connect } from '@core/database/connect';
import { APIManager } from '@core/managers/APIManager';

connect()
  .then(() => {
    const apiManager = new APIManager();

    apiManager.connect();
  })
  .catch(error => {
    console.log(error.stack || error); // eslint-disable-line no-console
    process.exit(1);
  });
