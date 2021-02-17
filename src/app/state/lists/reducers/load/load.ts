import { List } from '../../../../shared/entities/lists/list.model';

export function LOAD(state: List[]): List[] {
  return [...state];
}

export function LOAD_SUCCESS(state: List[],  action: { lists: List[] } ): List[] {
  return [...action.lists];
}

export function LOAD_ERROR(state: List[]): List[] {
  return [...state];
}
