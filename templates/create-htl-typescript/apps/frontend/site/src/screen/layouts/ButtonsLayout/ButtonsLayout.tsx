import { useState, useCallback } from 'react';

import { ButtonsLayoutContext, ButtonsLayoutConfiguration } from './Context';
import {
  Wrapper,
  StickyContainer,
  Content,
  ButtonsWrap,
  ButtonsContainer,
} from './styles';

import { Footer } from '@screen/components/common/Footer';
import { Header } from '@screen/components/common/Header';
import { FlexFullScreenStyle } from '@screen/styles/FlexFullScreenStyle';

export function ButtonsLayout({ children }: PropsWithChildren): JSX.Element {
  const [config, setConfig] = useState<ButtonsLayoutConfiguration>({
    title: 'Loading...',
    buttons: [],
  });

  const configure = useCallback((newConfig: ButtonsLayoutConfiguration) => {
    setConfig(currentConfig => ({
      ...currentConfig,
      ...newConfig,
    }));
  }, []);

  return (
    <ButtonsLayoutContext.Provider value={{ configure }}>
      <FlexFullScreenStyle>
        <Wrapper>
          <StickyContainer>
            <Header />
          </StickyContainer>

          <ButtonsWrap className="main-padding-x">
            <ButtonsContainer>
              {config.buttons.map(({ handler, icon: Icon }, index) => (
                <button type="button" onClick={handler} key={index}>
                  <Icon />
                </button>
              ))}
            </ButtonsContainer>
          </ButtonsWrap>

          <Content>{children}</Content>
        </Wrapper>

        <Footer />
      </FlexFullScreenStyle>
    </ButtonsLayoutContext.Provider>
  );
}

/* eslint react/no-array-index-key: off */
