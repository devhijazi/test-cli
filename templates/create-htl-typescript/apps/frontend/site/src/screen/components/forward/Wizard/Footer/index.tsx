import { useWizard } from '@hitechline/react-wizard';
import { useCallback } from 'react';

import { useContext } from '../Context';
import { Container, BackButton, NextButton } from './styles';

export function Footer(): JSX.Element {
  const { emitter } = useContext();
  const { current, next, previous } = useWizard();

  const getListenerCount = useCallback(
    (listener: string): number => {
      const count = emitter.current?.listenerCount(listener);

      return typeof count === 'number' ? count : 0;
    },
    [emitter],
  );

  const handleNext = useCallback(() => {
    if (getListenerCount('next') <= 0) {
      next();
      return;
    }

    emitter.current?.emit('next');
  }, [emitter, next, getListenerCount]);

  const handlePrevious = useCallback(() => {
    if (getListenerCount('previous') <= 0) {
      previous();
      return;
    }

    emitter.current?.emit('previous');
  }, [emitter, previous, getListenerCount]);

  return (
    <Container>
      {current > 0 && <BackButton onClick={handlePrevious}>Voltar</BackButton>}

      <NextButton onClick={handleNext}>Avançar</NextButton>
    </Container>
  );
}
