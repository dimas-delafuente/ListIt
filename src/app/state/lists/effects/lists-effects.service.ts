import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { List } from 'src/app/shared/entities/lists/list.model';

import { State } from '../../stateDefinition';
import { createSuccess, ListActionTypes, loadSuccess } from '../actions';
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
            map(lists => loadSuccess( { lists } )),
            tap(() => console.log("LOADED")),
            catchError(() => {
                console.log("LOADED ERROR");
                return of({ type: ListActionTypes.LOAD_ERROR});
            })
        )
    );

    createList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ListActionTypes.CREATE),
            tap(() => console.log("LOADING")),
            exhaustMap((action: { payload: { list: List } }) => this.listService.createList(action.payload.list)),
            map(list => createSuccess( { list } )),
            tap(() => console.log("LOADED")),
            catchError(() => {
                console.log("LOADED ERROR");
                return of({ type: ListActionTypes.LOAD_ERROR});
            })
        )
    );
}
