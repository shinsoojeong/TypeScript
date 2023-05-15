export function getFinalState(baseState: number, queue: (number | object)[]) {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      finalState = update(finalState);
    } else {
      finalState = Number(update);
    }
  }

  return finalState;
}
