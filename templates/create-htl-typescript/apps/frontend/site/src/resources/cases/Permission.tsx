import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useAuth } from '@resources/hooks/useAuth';

interface Props {
  permission: EmployeeHealthy['permission'];
}

export function Permission({
  children,
  permission,
}: PropsWithChildren<Props>): JSX.Element {
  const history = useHistory();
  const { signed } = useSelector(state => state.auth);
  const { loaded, user } = useAuth();

  useEffect(() => {
    if (!loaded) {
      return;
    }

    if (typeof user?.permission === 'number' && user.permission >= permission) {
      return;
    }

    history.push('/app');
  }, [signed, loaded, history, permission, user?.permission]);

  return <>{children}</>;
}
