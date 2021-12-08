import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
  ), {dispatch: false}); // Prevent infinite loop

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

}
