import { AppState } from './reducers';
import { createSelector } from '@ngrx/store';

const selectReposState = (state: AppState) => state.repos;

const repoProjector = ({ url, stars, description, language, languageColor }) => ({
  title: url.replace('https://github.com/', ''),
  stars,
  description,
  language,
  languageColor
});

export const selectRepos = createSelector(selectReposState, ({ items }) => items.map(repoProjector));

export const selectSaved = createSelector(selectReposState, ({ items, saved }) => {
  return items
    .filter((item, index) => saved.includes(index))
    .map(repoProjector);
});

export const selectSavedCount = createSelector(selectReposState, ({ saved }) => saved.length);

export const selectRepoDetail = createSelector(selectReposState, ({ items }, index) => {
  console.log(items);
  if (!items.length) {
    return;
  }

  const repo = items[index];
  return { ...repoProjector(repo), builtBy: repo.builtBy };
});
