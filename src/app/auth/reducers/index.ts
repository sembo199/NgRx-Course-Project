import { NumberValueAccessor } from '@angular/forms';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';

export interface AuthState {
  user: User;
  logins: number;
}

export const initialAuthState: AuthState = {
  user: undefined,
  logins: 0
}

export const authReducer = createReducer(

  initialAuthState,

  on(AuthActions.login, (state, action) => {

    console.log("Calling Login Reducer");

    // debugger;

    return {
      ...state,
      logins: ++state.logins,
      user: action.user
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      user: undefined
    };
  })
);
