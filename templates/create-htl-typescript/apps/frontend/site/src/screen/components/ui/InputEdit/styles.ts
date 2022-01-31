import styled from '@emotion/styled';
import InputMask from 'react-input-mask';

const INPUT_HEIGHT = '48px';
const BORDER_RADIUS = '8px';

export const Container = styled.div`
  width: 100%;
  position: relative;
  max-width: var(--wai-max-width);

  > label {
    position: absolute;
    display: flex;
    z-index: 2;

    top: calc(-100% / 3);
    transform: translateY(calc(100% / 3));

    padding: 0 4px;
    margin-left: 30px;

    align-items: center;
    background-color: var(--color-main-background);

    span {
      display: block;
      margin-left: 4px;

      font-size: 12px;
      color: var(--color-strong-grey);
    }

    .icon {
      display: flex;
      z-index: 1;

      svg {
        width: 20px;
        height: auto;

        color: var(--color-favorite) !important;
      }
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  overflow: hidden;
  border: 1px solid var(--color-favorite);

  border-radius: ${BORDER_RADIUS};
`;

export const InputElement = styled(InputMask)`
  width: 100%;
  padding: 10px;
  height: ${INPUT_HEIGHT};

  font-size: 14px;

  color: var(--color-black);
  background-color: var(--color-main-background);

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const Error = styled.div`
  display: block;
  margin-top: 4px;
  font-size: 12px;

  text-align: left;
  color: #f04747;
  text-transform: uppercase;
`;
