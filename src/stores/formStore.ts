import { writable, Writable } from "svelte/store";

export const createFormStore = <T>(data?: T): Writable<{} | T> => {
  const store = writable<T | {}>(data || {});

  return store;
};
