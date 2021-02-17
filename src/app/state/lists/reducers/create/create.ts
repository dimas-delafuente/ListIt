import { List } from '../../../../shared/entities/lists/list.model';

export function CREATE(state: List[]): List[] {
    return [...state];
}

export function CREATE_SUCCESS(state: List[], action: { list: List }): List[] {
    const newState = [...state];
    newState.push(action.list);
    return newState;
}

export function CREATE_ERROR(state: List[]): List[] {
    return [...state];
}
