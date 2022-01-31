import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
  href: string;
  name: string;
  email: string;
}

export function Card({ name, email, href }: Props): JSX.Element {
  return (
    <Container as={Link} to={href}>
      <h3>{name}</h3>
      <h4>{email}</h4>
    </Container>
  );
}
