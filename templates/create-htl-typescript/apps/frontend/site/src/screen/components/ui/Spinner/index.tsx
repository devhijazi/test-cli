import { HTMLAttributes } from 'react';

import { Container, Spinner as SpinnerElement } from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: string;
  color?: string;
}

export function Spinner({
  size = '20px',
  color = '#000',
  ...rest
}: Props): JSX.Element {
  return (
    <Container {...rest}>
      <SpinnerElement size={size} color={color} />
    </Container>
  );
}
