import { createAction, props } from '@ngrx/store';
import {List} from './../../shared/entities/lists/list.model';

export enum ListActionTypes {
    LOAD = '[Lists] Load',
    LOAD_SUCCESS = '[Lists] Load Success',
    LOAD_ERROR = '[Lists] Load Error'
}

export const load = createAction(ListActionTypes.LOAD);
export const loadSuccess = createAction(ListActionTypes.LOAD_SUCCESS, props<{ lists: List[]}>());
export const loadError = createAction(ListActionTypes.LOAD_ERROR);
