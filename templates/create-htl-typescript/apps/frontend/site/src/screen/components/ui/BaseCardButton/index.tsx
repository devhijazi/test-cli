import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

export const BaseCardButton: PolymorphicComponent<'div', PropsWithChildren> = ({
  children,
  ...rest
}: PropsWithChildren): JSX.Element => (
  <Container {...rest}>
    <div className="content">{children}</div>

    <div className="icon">
      <FiChevronRight size="30px" />
    </div>
  </Container>
);
