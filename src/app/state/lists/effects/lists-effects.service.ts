import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { State } from '../../stateDefinition';
import { ListActionTypes, loadSuccess } from '../actions';
import { ListService } from './../../../services/lists/list.service';

@Injectable()
export class ListsEffects {
    constructor(
        private actions$: Actions,
        private listService: ListService,
        private store: Store<State>
    ) {}

    loadLists$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ListActionTypes.LOAD),
            tap(() => console.log("LOADING")),
            exhaustMap(() => this.listService.getAll()),
            map(lists => loadSuccess({ lists })),
            tap((lists) => console.log("LOADED")),
            catchError(() => {
                console.log("LOADED ERROR");
                return of({ type: ListActionTypes.LOAD_ERROR});
            })
        )
    );
}
