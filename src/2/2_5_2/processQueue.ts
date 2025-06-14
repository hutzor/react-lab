import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]): number {
  let state = baseState;
  for (const update of queue) {
    if (typeof update === 'function') {
      state = update(state);
    } else {
      state = update;
    }
  }
  return state;
}
