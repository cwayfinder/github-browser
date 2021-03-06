import { reducer } from 'ts-action';
import { on } from 'ts-action/functions/reducer';
import { loadRepos, loadReposFail, loadReposSuccess, removeRepo, saveRepo } from './actions';

export interface AppState {
  repos: ReposState;
}

export interface ReposState {
  items: any[];
  loading: boolean;
  saved: number[];
}

const initialState: ReposState = {
  items: [],
  loading: false,
  saved: [],
};

export const repoReducers = reducer<ReposState>([
  on(loadRepos, state => ({ ...state, loading: true })),
  on(loadReposSuccess, (state, { payload: { items } }) => ({ ...state, items, loading: false })),
  on(loadReposFail, state => ({ ...state, loading: false })),

  on(saveRepo, (state, { payload: { index } }) => ({ ...state, saved: [...state.saved, index] })),
  on(removeRepo, (state, { payload: { index } }) => ({ ...state, saved: state.saved.filter(i => i !== index) })),
], initialState);
