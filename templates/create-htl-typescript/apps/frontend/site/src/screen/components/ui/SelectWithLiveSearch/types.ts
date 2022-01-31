import type { HTMLAttributes, ReactNode } from 'react';
import type { IconType } from 'react-icons';

export interface SelectOption<T = any> {
  value: T;
  label: string;
  element?(): ReactNode;
}

export interface SelectWithLiveSearchProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string;
  title: string;
  options: SelectOption[];
  icon?: IconType;
  onChange?(option: SelectOption): any;
  onSearchChange?(value: string): any;
}
