import { Container } from './styles';

interface Props {
  title: string;
  text: number | string;
}

export function Card({ text, title }: Props): JSX.Element {
  return (
    <Container className="break-word">
      <h3>{text}</h3>
      <p>{title}</p>
    </Container>
  );
}
