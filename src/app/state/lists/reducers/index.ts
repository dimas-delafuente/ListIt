import { Action, createReducer, on } from '@ngrx/store';
import {
  create,
  createSuccess,
  createError,
  load,
  loadError,
  loadSuccess
} from '../actions';
import { LOAD, LOAD_ERROR, LOAD_SUCCESS } from './load/load';
import { List } from './../../../shared/entities/lists/list.model';
import { CREATE, CREATE_SUCCESS, CREATE_ERROR } from './create/create';

const initialState: List[] = [];

const _listsReducer = createReducer(
  initialState,
  on(load, LOAD),
  on(loadSuccess, LOAD_SUCCESS),
  on(loadError, LOAD_ERROR),
  on(create, CREATE),
  on(createSuccess, CREATE_SUCCESS),
  on(createError, CREATE_ERROR)
);

export function listsReducer(state: List[] | undefined, action: Action) {
  return _listsReducer(state, action);
}
