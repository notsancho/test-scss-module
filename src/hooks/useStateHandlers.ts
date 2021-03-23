import { useState } from 'react';

type Optional<T extends object> = {
  [K in keyof T]?: T[K];
};

export const useStateHandlers = <T extends object>(
  initialState: T,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
): [T, (newState: Optional<T> | ((prevState: T) => Optional<T>)) => void] => {
  const [state, setState] = useState(initialState);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setNewState = (newState: Optional<T> | ((prevState: T) => Optional<T>)): void => {
    if (typeof newState === 'function') {
      setState((prevState) => ({ ...prevState, ...newState(prevState) }));
    } else {
      setState((prevState) => ({
        ...prevState,
        ...newState,
      }));
    }
  };

  return [state, setNewState];
};
