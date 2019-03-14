import { AppState } from './reducers';
import { createSelector } from '@ngrx/store';

const selectReposState = (state: AppState) => state.repos;

const repoProjector = ({ url, stars, description, language, languageColor }, index) => ({
  index,
  title: url.replace('https://github.com/', ''),
  stars,
  description,
  language,
  languageColor
});

export const selectRepos = createSelector(selectReposState, ({ items }) => items.map(repoProjector));

export const selectSaved = createSelector(selectReposState, ({ items, saved }) => {
  return items
    .map(repoProjector)
    .filter((item, index) => saved.includes(index));
});

export const selectSavedCount = createSelector(selectReposState, ({ saved }) => saved.length);

export const selectRepoDetail = createSelector(selectReposState, ({ items, saved }, index) => {
  if (!items.length) {
    return;
  }

  const repo = items[index];
  return {
    ...repoProjector(repo, index),
    builtBy: repo.builtBy,
    saved: saved.includes(index)
  };
});
