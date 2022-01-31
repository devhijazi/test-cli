import { Route, Switch } from 'react-router-dom';

import { useBuildRoute } from '@resources/hooks/useBuildRoute';
import { Employees } from '@screen/pages/Employees';
import { EmployeeCreate } from '@screen/pages/Employees/pages/Create';
import { EmployeeEdit } from '@screen/pages/Employees/pages/Edit';

export function EmployeeRoutes(): JSX.Element {
  const { make } = useBuildRoute('/employees');

  return (
    <Switch>
      <Route path={make('/')} exact>
        <Employees />
      </Route>

      <Route path={make('/create')}>
        <EmployeeCreate />
      </Route>

      <Route path={make('/:id')}>
        <EmployeeEdit />
      </Route>
    </Switch>
  );
}
