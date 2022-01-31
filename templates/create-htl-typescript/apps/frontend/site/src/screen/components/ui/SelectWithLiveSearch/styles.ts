import styled from '@emotion/styled';

import { Z_INDEX } from '@screen/styles/config';

const MAIN_PADDING = '10px';
const SELECT_HEIGHT = 'var(--wai-height)';
const BORDER_RADIUS = 'var(--wai-main-border-radius)';
const OPTIONS_HEADER_ICON_SIZE = '20px';
const OPTIONS_BORDER = '1px solid rgba(0, 0, 0, 0.1)';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--wai-max-width);

  > label {
    display: block;
    width: max-content;
    margin-bottom: 3px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  overflow: hidden;
  border: 1px solid var(--color-teen-grey);

  border-radius: ${BORDER_RADIUS};

  &:before {
    content: '';
    position: absolute;
    transform: translateX(-50%);

    top: calc(50% - (8px / 2));
    right: calc(${MAIN_PADDING} - (8px / 2));

    border-style: solid;
    border-width: 8px 8px 0 8px;
    border-color: var(--color-strong-grey) transparent;
  }

  ${Container}.error & {
    border-color: var(--color-error);
  }

  ${Container}.visible & {
    border-color: var(--color-favorite);

    .icon svg {
      color: var(--color-favorite) !important;
    }
  }

  .icon {
    z-index: 1;
    display: flex;
    padding: ${MAIN_PADDING};

    height: ${SELECT_HEIGHT};
    width: calc((${SELECT_HEIGHT}) - ((${BORDER_RADIUS}) / 2));

    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: auto;
      color: var(--color-white-grey) !important;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: ${SELECT_HEIGHT};
  padding: ${MAIN_PADDING};

  font-size: 14px;
  text-align: left;

  color: rgba(0, 0, 0, 0.8);

  ${Container}.with-icon & {
    padding-left: 0;
  }
`;

// Options

export const OptionsContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  z-index: ${Z_INDEX.MAIN};

  max-height: 200px;
  top: calc(100% + 10px);

  overflow-x: hidden;
  flex-direction: column;

  border-radius: ${BORDER_RADIUS};
  border: 1px solid var(--color-white-grey);

  background-color: var(--color-white);
  box-shadow: var(--main-bottom-box-shadow);
`;

export const OptionsHeader = styled.div`
  position: relative;
  border-bottom: ${OPTIONS_BORDER};

  &,
  input {
    width: 100%;
  }

  svg {
    width: ${OPTIONS_HEADER_ICON_SIZE};
    height: auto;
  }

  input {
    color: rgba(0, 0, 0, 0.8);

    font-size: 14px;
    padding: ${OPTIONS_HEADER_ICON_SIZE}
      calc((${MAIN_PADDING} * 2) + ${OPTIONS_HEADER_ICON_SIZE})
      ${OPTIONS_HEADER_ICON_SIZE} ${MAIN_PADDING};

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  svg {
    position: absolute;
    top: 50%;
    right: ${MAIN_PADDING};
    transform: translateY(-50%);
  }
`;

export const OptionsContent = styled.section`
  display: flex;
  width: 100%;

  flex-grow: 1;
  overflow-y: auto;

  flex-direction: column;

  button {
    text-align: left;
    padding: 16px ${MAIN_PADDING};

    & + button {
      border-top: ${OPTIONS_BORDER};
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;

export const EmptyOptions = styled.h1`
  color: var(--color-grey);
  padding: 16px ${MAIN_PADDING};

  font-size: 2rem;
  text-align: center;
`;
