import { AppState } from './reducers';
import { createSelector } from '@ngrx/store';

const selectReposState = (state: AppState) => state.repos;

export const selectRepos = createSelector(selectReposState, ({ items }) => {
  return items.map(({ url, stars, description, language, languageColor }) => ({
    title: url.replace('https://github.com/', ''),
    stars,
    description,
    language,
    languageColor
  }));
});

export const selectSavedCount = createSelector(selectReposState, ({ saved }) => saved.length);
