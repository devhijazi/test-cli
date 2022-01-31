import { createContext } from 'react';
import type { IconType } from 'react-icons';

export interface TopSearchLayoutConfigurationButton {
  icon: IconType;
  handler: () => any;
}

export interface TopSearchLayoutConfiguration {
  title: string;
  placeholder?: string;
  buttons?: TopSearchLayoutConfigurationButton[];
}

export interface TopSearchLayoutContextData {
  configure(config: TopSearchLayoutConfiguration): void;
}

export const TopSearchLayoutContext = createContext<TopSearchLayoutContextData>(
  {} as TopSearchLayoutContextData,
);
