import { createContext } from 'react';
import type { IconType } from 'react-icons';

export interface ButtonsLayoutConfigurationButton {
  icon: IconType;
  handler: () => any;
}

export interface ButtonsLayoutConfiguration {
  title: string;
  buttons: ButtonsLayoutConfigurationButton[];
}

export interface ButtonsLayoutContextData {
  configure(config: ButtonsLayoutConfiguration): void;
}

export const ButtonsLayoutContext = createContext<ButtonsLayoutContextData>(
  {} as ButtonsLayoutContextData,
);
