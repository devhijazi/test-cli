import produce from 'immer';

import { createPersistor } from '../config';
import { types } from './actions';
import type { State, Action } from './types';

const InitialState: State = {
  token: '',
  signed: false,
};

function reducer(state = InitialState, action: Action): State {
  return produce(state, draft => {
    switch (action.type) {
      case types.logOut: {
        draft.token = '';
        draft.signed = false;
        break;
      }
      case types.signInSuccess: {
        draft.token = action.payload.token;
        draft.signed = true;
        break;
      }
      default:
    }
  });
}

export default createPersistor<State, Action>(reducer, 'auth');

/* eslint no-param-reassign: 0 */
