import styled from '@emotion/styled';

const BOX_MARGIN = '20px';
const CONTAINER_PADDING = '18px';

export const Container = styled.form`
  display: flex;
  padding-top: ${CONTAINER_PADDING};
  padding-bottom: ${CONTAINER_PADDING};

  flex-direction: column;
  align-items: center;

  color: var(--color-white);
  box-shadow: var(--strong-bottom-box-shadow);
  background-color: var(--color-favorite);

  > h4 {
    font-size: 2.2rem;
    font-weight: 400;
  }

  > span.date {
    margin-top: ${BOX_MARGIN};
    font-size: 1.8rem;
  }
`;

const INPUT_PADDING = '18px';
const INPUT_ICON_SIZE = '20px';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: ${BOX_MARGIN};
  max-width: var(--hub-max-width);

  input {
    width: 100%;
    height: 55px;
    padding: 0 calc((${INPUT_PADDING} * 2) + ${INPUT_ICON_SIZE});

    color: var(--color-white);
    background-color: rgba(0, 0, 0, 0.1);

    font-weight: 300;

    border-radius: 999px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

    &::placeholder {
      opacity: 0.8;
      color: var(--color-white);
    }
  }

  .icon {
    display: flex;
    position: absolute;

    top: 50%;
    left: ${INPUT_PADDING};
    transform: translateY(-50%);

    svg {
      width: ${INPUT_ICON_SIZE};
      height: auto;

      color: rgba(255, 255, 255, 0.9) !important;

      > path {
        stroke: currentColor;
      }
    }
  }
`;
