import { Container, Paragraph } from './styles';

export function Footer(): JSX.Element {
  return (
    <Container className="main-padding-x">
      <Paragraph>
        <strong>© HITECHLINE</strong> todos os direitos reservados.
      </Paragraph>
    </Container>
  );
}
