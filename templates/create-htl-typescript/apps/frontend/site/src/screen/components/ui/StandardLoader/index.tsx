import { Container, SpinnerContainer } from './styles';

export function StandardLoader(): JSX.Element {
  return (
    <Container>
      <SpinnerContainer>
        <span />
      </SpinnerContainer>
    </Container>
  );
}
