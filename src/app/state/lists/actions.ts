import { createAction, props } from '@ngrx/store';
import {List} from './../../shared/entities/lists/list.model';

export enum ListActionTypes {
    LOAD = '[Lists] Load',
    LOAD_SUCCESS = '[Lists] Load Success',
    LOAD_ERROR = '[Lists] Load Error',

    CREATE = '[Lists] Create',
    CREATE_SUCCESS = '[Lists] Create Success',
    CREATE_ERROR = '[Lists] Create Error'
}

export const load = createAction(ListActionTypes.LOAD);
export const loadSuccess = createAction(ListActionTypes.LOAD_SUCCESS, props<{ lists: List[]}>());
export const loadError = createAction(ListActionTypes.LOAD_ERROR);

export const create = createAction(ListActionTypes.CREATE);
export const createSuccess = createAction(ListActionTypes.CREATE_SUCCESS, props<{ list: List}>());
export const createError = createAction(ListActionTypes.CREATE_ERROR);
