import {
  createContext,
  useRef,
  RefObject,
  useCallback,
  useContext as useDefaultContext,
} from 'react';

import { EventEmitter } from 'events';

type Event = 'next' | 'previous';

type Listener = () => any;

type AnyListener = (...params: any[]) => any;

export interface ContextData {
  emitter: RefObject<MyEventEmitter>;
  addListener(event: Event, listener: Listener): void;
  removeListener(event: Event, listener: Listener): void;
}

export const Context = createContext<ContextData>({} as ContextData);

export const useContext = (): ContextData => useDefaultContext(Context);

export function Provider({ children }: PropsWithChildren): JSX.Element {
  const emitter = useRef<MyEventEmitter>(new MyEventEmitter()); // eslint-disable-line @typescript-eslint/no-use-before-define

  const addListener = useCallback((event: Event, listener: Listener) => {
    emitter.current.addListener(event, listener);
  }, []);

  const removeListener = useCallback((event: Event, listener: Listener) => {
    emitter.current.removeListener(event, listener);
  }, []);

  return (
    <Context.Provider
      value={{
        emitter,
        addListener,
        removeListener,
      }}
    >
      {children}
    </Context.Provider>
  );
}

class MyEventEmitter extends EventEmitter {
  public emit(event: Event): boolean;

  public emit(event: string | symbol, ...args: any[]): boolean {
    return super.emit(event, ...args);
  }

  public addListener(event: Event, listener: Listener): this;

  public addListener(event: string | symbol, listener: AnyListener): this {
    return super.addListener(event, listener);
  }

  public removeListener(event: Event, listener: Listener): this;

  public removeListener(event: string | symbol, listener: AnyListener): this {
    return super.removeListener(event, listener);
  }
}
