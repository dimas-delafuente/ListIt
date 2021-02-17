import { createSelector } from '@ngrx/store';
import { State } from '../stateDefinition';
import { selectState } from '../stateSelector';

export const selectLists = createSelector(selectState, (state: State) => state.lists);
