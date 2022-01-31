import styled from '@emotion/styled';
import { darken, rgba, cssVar } from 'polished';

import { Z_INDEX } from '@screen/styles/config';

const getWhiteColor = (): string => cssVar('--color-white', '#fff') as string;

export const Container = styled.div`
  position: fixed;
  display: flex;

  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.MAX};

  top: 0;
  left: 0;

  align-items: center;
  justify-content: center;

  background-color: ${rgba(getWhiteColor(), 0.5)};
`;

export const SpinnerContainer = styled.div`
  padding: 20px;
  border-radius: var(--wai-main-border-radius);

  box-shadow: var(--main-box-shadow);
  background-color: ${darken(0.03, getWhiteColor())};

  > span {
    display: block;

    width: 60px;
    height: 60px;

    border: 4px solid ${rgba(cssVar('--color-favorite', '#fff'), 0.2)};

    border-left: 4px solid var(--color-favorite);
    border-radius: 50%;
    animation: spinner 300ms linear infinite;

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
