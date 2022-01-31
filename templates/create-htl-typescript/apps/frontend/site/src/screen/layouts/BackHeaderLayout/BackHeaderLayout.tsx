import { useState, useCallback } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { DefaultLayout } from '../DefaultLayout';
import { BackHeaderLayoutContext } from './Context';
import { BackHeader, Content } from './styles';

import { useGoBack } from '@resources/hooks/useGoBack';

export function BackHeaderLayout({ children }: PropsWithChildren): JSX.Element {
  const goBack = useGoBack();
  const [title, setTitleState] = useState<string>('Carregando...');

  const setTitle = useCallback((newTitle: string) => {
    setTitleState(newTitle);
  }, []);

  return (
    <BackHeaderLayoutContext.Provider value={{ setTitle }}>
      <DefaultLayout>
        <BackHeader className="main-padding-x">
          <section>
            <button type="button" onClick={goBack}>
              <FiChevronLeft />
            </button>

            <h2>{title}</h2>
          </section>
        </BackHeader>

        <Content className="main-padding-x">{children}</Content>
      </DefaultLayout>
    </BackHeaderLayoutContext.Provider>
  );
}
