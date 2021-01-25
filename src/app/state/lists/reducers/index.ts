import { Action, createReducer, on } from '@ngrx/store';
import {
  load,
  loadError,
  loadSuccess
} from '../actions';
import { LOAD, LOAD_SUCCESS } from './load/load';
import { List } from './../../../shared/entities/lists/list.model';

const initialState: List[] = [];

const _listsReducer = createReducer(
  initialState,
  on(load, LOAD),
  on(loadSuccess, LOAD_SUCCESS)
);

export function listsReducer(state: List[] | undefined, action: Action) {
  return _listsReducer(state, action);
}