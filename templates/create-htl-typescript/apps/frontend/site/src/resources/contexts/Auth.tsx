import { createContext, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { api } from '@modules/services/api';
import { actions } from '@store/modules/auth/actions';

type User = EmployeeHealthy;

interface AuthenticateData extends SessionLoginData {}

export interface AuthContextData {
  loaded: boolean;
  user: User | null;
  retrieveEmployee: () => Promise<void>;
  authenticate(data: AuthenticateData): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: PropsWithChildren): JSX.Element {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { signed } = useSelector(({ auth }) => auth);

  const [loaded, setLoaded] = useState(false);
  const [user, updateUser] = useState<User | null>(null);

  const authenticate = useCallback(
    async ({ email, password }: AuthenticateData) => {
      const {
        data: { token, employee: userData },
      } = await api.post<CreateSessionLoginHttpData>('sessions/login', {
        email,
        password,
      });

      updateUser(userData);
      setLoaded(true);

      setTimeout(() => {
        dispatch(actions.signInRequest({ token }));

        push('/app');
      }, 0);
    },
    [push, dispatch, updateUser],
  );

  const retrieveEmployee = useCallback(async () => {
    try {
      const { data } = await api.get<GetSessionMeHttpData>(
        'sessions/login/@me',
      );

      updateUser(data);
    } catch {
      setLoaded(false);
      dispatch(actions.logOut({}));
    }
  }, [dispatch, updateUser]);

  useEffect(() => {
    if (!signed || loaded) {
      return;
    }

    retrieveEmployee();
  }, [loaded, signed, retrieveEmployee]);

  return (
    <AuthContext.Provider
      value={{ loaded, user, authenticate, retrieveEmployee }}
    >
      {children}
    </AuthContext.Provider>
  );
}
