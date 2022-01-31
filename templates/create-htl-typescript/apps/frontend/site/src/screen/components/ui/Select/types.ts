import type { HTMLAttributes } from 'react';
import type { IconType } from 'react-icons';

export interface SelectOption<T = any> {
  value: T;
  label: string;
}

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string;
  title: string;
  options: SelectOption[];
  icon?: IconType;
  onChange?(option: SelectOption): any;
}
