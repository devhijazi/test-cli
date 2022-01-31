import { Wizard as ReactWizard } from '@hitechline/react-wizard';
import { ReactNode } from 'react';

import { Provider } from './Context';
import { Container } from './styles';

interface Props {
  children: ReactNode;
}

export function Wizard({ children }: Props): JSX.Element {
  return (
    <Provider>
      <ReactWizard>
        <Container>{children}</Container>
      </ReactWizard>
    </Provider>
  );
}
