import { writable } from 'svelte/store';

let store;

export const getStore = init => {
  if (init || !store) store = writable({});
  return store;
};
