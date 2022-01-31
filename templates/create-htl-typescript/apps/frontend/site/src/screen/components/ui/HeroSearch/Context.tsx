import { createContext, useCallback, useState } from 'react';

export interface HeroSearchContextData {
  date?: string;
  search: string;
  setDate(date: string): void;
  setSearch(value: string): void;
}

export const HeroSearchContext = createContext<HeroSearchContextData>(
  {} as HeroSearchContextData,
);

export function HeroSearchProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [date, setStateDate] = useState<string>();
  const [search, setSearchState] = useState<string>('');

  const setDate = useCallback((newDate: string) => {
    setStateDate(newDate);
  }, []);

  const setSearch = useCallback((value: string) => {
    setSearchState(value);
  }, []);

  return (
    <HeroSearchContext.Provider
      value={{
        date,
        search,
        setDate,
        setSearch,
      }}
    >
      {children}
    </HeroSearchContext.Provider>
  );
}
