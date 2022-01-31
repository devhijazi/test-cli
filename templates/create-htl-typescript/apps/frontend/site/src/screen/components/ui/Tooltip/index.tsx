import { Container } from './styles';

interface Props {
  title: string;
  className?: string;
}

export function Tooltip({
  title,
  children,
  className = '',
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}
