import { createContext } from 'react';

export interface BackHeaderLayoutContextData {
  setTitle: (title: string) => any;
}

export const BackHeaderLayoutContext = createContext<BackHeaderLayoutContextData>(
  {} as BackHeaderLayoutContextData,
);
