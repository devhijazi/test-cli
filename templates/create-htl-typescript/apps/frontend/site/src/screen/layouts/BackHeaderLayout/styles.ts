import styled from '@emotion/styled';

import { MainContainerStyle } from '@screen/styles/MainContainerStyle';

const BUTTON_SIZE = '40px';
const BUTTON_MARGIN = '15px';

export const BackHeader = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;

  background-color: var(--color-favorite);

  section {
    display: flex;
    margin: 0 auto;

    max-width: var(--hub-max-width);
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    flex-grow: 1;
    text-align: center;

    padding: 0 calc(${BUTTON_SIZE} + ${BUTTON_MARGIN});
    margin-left: calc(-${BUTTON_SIZE} - ${BUTTON_MARGIN});

    font-size: 2.4rem;
    font-weight: 400;
    color: var(--color-white);
  }

  button {
    display: flex;
    z-index: 1;

    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: ${BUTTON_SIZE};
    height: ${BUTTON_SIZE};
    margin-right: ${BUTTON_MARGIN};

    border-radius: 50%;
    color: var(--color-favorite);
    background-color: var(--color-white);

    svg {
      width: calc(${BUTTON_SIZE} * 0.5);
      height: auto;
    }
  }
`;

const CONTENT_SPACING = '16px';

export const Content = styled(MainContainerStyle)`
  max-width: calc(var(--hub-max-width) + (var(--box-spacing) * 2));
  margin: 0 auto;

  padding-top: ${CONTENT_SPACING};
  padding-bottom: ${CONTENT_SPACING};
`;
