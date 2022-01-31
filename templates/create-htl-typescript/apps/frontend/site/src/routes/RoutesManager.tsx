import { Route, Switch, Redirect } from 'react-router-dom';

import { EmployeeRoutes } from './Employee.routes';
import { MainRoutes } from './Main.routes';

export function RoutesManager(): JSX.Element {
  return (
    <Switch>
      <Route path="/employees">
        <EmployeeRoutes />
      </Route>

      <Route path="/">
        <MainRoutes />
      </Route>

      {/* 404 */}

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
