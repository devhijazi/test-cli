import styled from '@emotion/styled';
import { rgba, cssVar } from 'polished';

import { Z_INDEX } from '@screen/styles/config';

export const Container = styled.div`
  position: fixed;
  z-index: ${Z_INDEX.MAX};
  width: 100%;

  padding-top: 20px;
  padding-bottom: 20px;

  left: 0;
  bottom: 0;
  color: var(--color-white);

  background-color: #ed4245;
  border-top: 4px solid #c93235;
  box-shadow: var(--strong-top-box-shadow);
`;

const BUTTON_SIZE = '34px';
const BUTTON_MARGIN = '16px';

export const Content = styled.section`
  display: flex;
  margin: 0 auto;

  max-width: var(--hub-max-width);
  flex-direction: column;
  align-items: center;

  p {
    flex-grow: 1;
    text-align: center;
  }

  button {
    display: flex;
    flex-shrink: 0;

    margin: 0 0 ${BUTTON_MARGIN} 0;
    width: ${BUTTON_SIZE};
    height: ${BUTTON_SIZE};

    align-items: center;
    justify-content: center;
    border-radius: 4px;

    border: 2px solid var(--color-white);

    &:hover {
      background-color: ${rgba(cssVar('--color-white', '#fff'), 0.1)};
    }

    svg {
      width: 20px;
      height: auto;
      color: var(--color-white);
    }
  }
  @media (min-width: 660px) {
    flex-direction: row;
    button {
      margin: 0 ${BUTTON_MARGIN} 0 0;
    }
    p {
      z-index: -1;
      padding: 0 calc(${BUTTON_SIZE} + ${BUTTON_MARGIN});
      margin-left: calc(-${BUTTON_SIZE} - ${BUTTON_MARGIN});
    }
  }
`;
