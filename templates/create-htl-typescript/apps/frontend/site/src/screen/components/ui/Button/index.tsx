import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...rest }: Props): JSX.Element {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}
