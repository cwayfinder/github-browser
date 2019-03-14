import { AppState } from './reducers';
import { createSelector } from '@ngrx/store';

const selectRepos = (state: AppState) => state.repos;

export const selectSavedCount = createSelector(selectRepos, ({saved}) => saved.length);
