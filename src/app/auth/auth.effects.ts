import { Injectable } from "@angular/core";
import { act, Actions } from "@ngrx/effects";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions) {
    actions$.subscribe(action => {
      if (action.type === AuthActions.login.type) {
        console.log("Login action!");
        localStorage.setItem('user', JSON.stringify(action['user']));
      }
    });
  }

}
