import { reducer } from 'ts-action';
import { on } from 'ts-action/functions/reducer';
import { loadRepos, loadReposFail, loadReposSuccess, removeRepo, saveRepo } from './actions';

export interface State {
  repos: any[];
  loading: boolean;
  saved: number[];
}

const initialState: State = {
  repos: [],
  loading: false,
  saved: [],
};

export const appReducer = reducer<State>([
  on(loadRepos, state => ({ ...state, loading: true })),
  on(loadReposSuccess, (state, { payload: { repos } }) => ({ ...state, repos, loading: false })),
  on(loadReposFail, state => ({ ...state, loading: false })),

  on(saveRepo, (state, { payload: { index } }) => ({ ...state, saved: [...state.saved, index] })),
  on(removeRepo, (state, { payload: { index } }) => ({ ...state, saved: state.saved.filter(i => i !== index) })),
], initialState);
