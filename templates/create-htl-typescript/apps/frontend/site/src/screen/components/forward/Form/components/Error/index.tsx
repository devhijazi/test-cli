import { useContext } from 'react';
import { FiX } from 'react-icons/fi';

import { FormContext } from '../../Context';
import { Container, Content } from './styles';

export function Error(): JSX.Element | null {
  const { error, resetError } = useContext(FormContext);

  if (!error) {
    return null;
  }

  return (
    <Container className="main-padding-x">
      <Content>
        <button type="button" onClick={resetError}>
          <FiX />
        </button>

        <p>{error}</p>
      </Content>
    </Container>
  );
}
