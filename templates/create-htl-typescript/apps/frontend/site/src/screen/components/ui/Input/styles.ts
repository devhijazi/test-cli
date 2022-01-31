import styled from '@emotion/styled';
import InputMask from 'react-input-mask';

const MAIN_PADDING = '10px';
const INPUT_HEIGHT = 'var(--wai-height)';
const BORDER_RADIUS = 'var(--wai-main-border-radius)';

export const Container = styled.div`
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

  .icon {
    z-index: 1;
    display: flex;
    padding: ${MAIN_PADDING};

    height: ${INPUT_HEIGHT};
    width: calc((${INPUT_HEIGHT}) - ((${BORDER_RADIUS}) / 2));

    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: auto;
      color: var(--color-grey) !important;
    }
  }

  ${Container}.focused & {
    border-color: var(--color-favorite);

    .icon svg {
      color: var(--color-favorite) !important;
    }
  }

  ${Container}.error & {
    border-color: var(--color-error);

    .icon svg {
      color: var(--color-error) !important;
    }
  }
`;

export const InputElement = styled(InputMask)`
  width: 100%;
  height: ${INPUT_HEIGHT};
  padding: ${MAIN_PADDING};

  font-size: 14px;

  color: rgba(0, 0, 0, 0.8);
  background-color: var(--color-white);

  ${Container}.focused & {
    color: var(--color-favorite);
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const Error = styled.div`
  display: block;
  margin-top: 4px;
  font-size: 12px;

  text-align: left;
  color: var(--color-error);
  text-transform: uppercase;
`;
