import { useState, useCallback } from 'react';

import {
  TopSearchLayoutContext,
  TopSearchLayoutConfiguration,
} from './Context';
import {
  Wrapper,
  StickyContainer,
  Content,
  ButtonsWrap,
  ButtonsContainer,
} from './styles';

import { Footer } from '@screen/components/common/Footer';
import { Header } from '@screen/components/common/Header';
import {
  HeroSearch,
  HeroSearchProvider,
} from '@screen/components/ui/HeroSearch';
import { FlexFullScreenStyle } from '@screen/styles/FlexFullScreenStyle';

export function TopSearchLayout({ children }: PropsWithChildren): JSX.Element {
  const [config, setConfig] = useState<TopSearchLayoutConfiguration>({
    title: 'Loading...',
    buttons: [],
  });

  const configure = useCallback((newConfig: TopSearchLayoutConfiguration) => {
    setConfig(currentConfig => ({
      ...currentConfig,
      ...newConfig,
    }));
  }, []);

  return (
    <TopSearchLayoutContext.Provider value={{ configure }}>
      <FlexFullScreenStyle>
        <HeroSearchProvider>
          <Wrapper>
            <StickyContainer>
              <Header />

              <HeroSearch
                title={config.title}
                placeholder={config.placeholder}
              />
            </StickyContainer>

            <ButtonsWrap className="main-padding-x">
              <ButtonsContainer>
                {config.buttons?.map(({ handler, icon: Icon }, index) => (
                  <button type="button" onClick={handler} key={index}>
                    <Icon />
                  </button>
                ))}
              </ButtonsContainer>
            </ButtonsWrap>

            <Content>{children}</Content>
          </Wrapper>
        </HeroSearchProvider>

        <Footer />
      </FlexFullScreenStyle>
    </TopSearchLayoutContext.Provider>
  );
}

/* eslint react/no-array-index-key: off */
