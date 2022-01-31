import { mergeClassNames } from '@hitechline/reactools';
import { useContext } from 'react';

import { Container, Spinner } from './styles';

import { FormContext } from '@screen/components/forward/Form';

export function SaveButton(): JSX.Element {
  const { loading } = useContext(FormContext);

  return (
    <Container type="submit" className={mergeClassNames({ loading })}>
      <Spinner color="#fff" className="spinner" />

      <span>Salvar</span>
    </Container>
  );
}
