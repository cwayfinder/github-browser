import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from 'ts-action-operators';
import { loadRepos, loadReposFail, loadReposSuccess } from './actions';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class AppEffects {

  @Effect()
  loadRepos$ = this.actions$.pipe(
    ofType(loadRepos),
    switchMap(() => this.http.get<any[]>('https://github-trending-api.now.sh/repositories').pipe(
      map(repos => loadReposSuccess({repos})),
      catchError(response => of(loadReposFail(response))),
    ))
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
