import 'react-redux';

interface AuthState {
  token: string;
  signed: boolean;
}

interface RootStore {
  auth: AuthState;
}

declare module 'react-redux' {
  interface DefaultRootState extends RootStore {}
}
