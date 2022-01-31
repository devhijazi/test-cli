import styled from '@emotion/styled';

import { MainContainerStyle } from '@screen/styles/MainContainerStyle';

const APPLY_PADDING = '18px';

export const Wrapper = styled(MainContainerStyle)``;

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
`;

const CONTENT_SPACING = '16px';
const BUTTONS_SPACING = '22px';

export const Content = styled(MainContainerStyle)`
  width: 100%;

  margin: ${CONTENT_SPACING} auto var(--box-spacing) auto;
  padding: ${APPLY_PADDING} var(--box-spacing) ${APPLY_PADDING}
    var(--box-spacing);

  @media (min-width: 1024px) {
    width: 100%;
    max-width: calc(
      var(--hub-max-width) + (var(--box-spacing) * 2) +
        (var(--box-spacing) * 0.5)
    );

    margin: -${BUTTONS_SPACING} auto ${APPLY_PADDING} auto;
    padding: ${APPLY_PADDING} var(--box-spacing) ${APPLY_PADDING}
      calc(var(--box-spacing) + var(--scrollbar-width));
  }
`;

const BUTTON_SIZE = '42px';

export const ButtonsWrap = styled.div`
  width: 100%;
  max-width: calc(var(--hub-max-width) + (var(--box-spacing) * 2));

  margin: 0 auto;
  padding-top: calc(${CONTENT_SPACING} + ${APPLY_PADDING});

  @media (min-width: 1024px) {
    position: sticky;
    display: flex;
    height: 0px;

    margin: 0 auto ${BUTTONS_SPACING} auto;
    padding-top: 0;
    padding-left: var(--box-spacing);

    top: calc(100% - ${BUTTONS_SPACING});
    transform: translateX(calc(${BUTTON_SIZE} * 2));

    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  gap: 10px;

  > button {
    display: flex;
    width: ${BUTTON_SIZE};
    height: ${BUTTON_SIZE};

    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: var(--color-favorite);
    box-shadow: var(--main-bottom-box-shadow);

    svg {
      width: calc(${BUTTON_SIZE} - (${BUTTON_SIZE} / 2));
      height: auto;

      color: var(--color-white);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;
