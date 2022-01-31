import { Route, Switch } from 'react-router-dom';

import { Login } from '@/screen/pages/Login';
import { useBuildRoute } from '@resources/hooks/useBuildRoute';
import { Home } from '@screen/pages/Home';

export function MainRoutes(): JSX.Element {
  const { base, make } = useBuildRoute('/');

  return (
    <Switch>
      <Route path={base} exact>
        <Login />
      </Route>

      <Route path={make('app')}>
        <Home />
      </Route>
    </Switch>
  );
}
