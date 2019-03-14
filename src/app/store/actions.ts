import { action, payload } from 'ts-action';

export const loadRepos = action('Load repos');
export const loadReposSuccess = action('Load repos success', payload<{ repos: any[] }>());
export const loadReposFail = action('Load repos fail', payload<{ error: any }>());

export const saveRepo = action('Save repo', payload<{ index: number }>());
export const removeRepo = action('Remove repo', payload<{ index: number }>());
