import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { cssVar, rgba } from 'polished';

import { Form as FormComponent } from '@screen/components/forward/Form';
import { Modal } from '@screen/components/forward/Modal';

const BUTTON_SIZE = '40px';

export const Options = styled.section`
  display: flex;
  gap: 10px;

  align-items: center;
  justify-content: center;

  button {
    display: flex;
    flex-shrink: 0;

    align-items: center;
    justify-content: center;

    width: ${BUTTON_SIZE};
    height: ${BUTTON_SIZE};

    border-radius: 50%;
    color: var(--color-white);
    background-color: var(--color-favorite);

    &.delete {
      background-color: var(--color-light-red);
    }

    svg {
      width: calc(${BUTTON_SIZE} * 0.5);
      height: auto;
    }
  }
`;

export const Container = styled.div``;

export const Form = styled(FormComponent)`
  display: flex;
  margin-top: 26px;
  gap: 20px;

  flex-direction: column;
  align-items: center;

  opacity: 0.5;
  pointer-events: none;

  &.editable {
    opacity: inherit;
    pointer-events: inherit;
  }
`;

const INPUT_SPACING = '18px';

export const Box = styled.section`
  --wai-max-width: 100%;

  display: grid;
  padding: 15px;

  width: 100%;
  gap: ${INPUT_SPACING};

  grid-template-columns: repeat(2, 1fr);
  border-radius: 6px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

interface ScopedInput {
  size?: string[];
}

export const ScopedInput = styled.section<ScopedInput>`
  display: flex;
  width: 100%;
  gap: ${INPUT_SPACING};

  ${({ size = [] }) =>
    size.map(
      (value, index) => css`
        > div:nth-child(${index + 1}) {
          width: ${value};
        }
      `,
    )}
`;

export const DeleteModal = styled(Modal)`
  --wai-max-width: 100%;

  width: 100%;
  max-width: max-content;

  padding: 20px;
  box-shadow: var(--main-bottom-box-shadow);

  background-color: var(--color-white);
  border-radius: var(--main-bigger-border-radius);

  p {
    text-align: center;
  }

  button.close {
    display: flex;
    width: 30px;
    height: 30px;
    margin-bottom: 20px;

    align-items: center;
    justify-content: center;

    border-radius: 4px;
    border: 2px solid var(--color-grey);

    &:hover {
      background-color: ${rgba(cssVar('--color-black', '#000'), 0.1)};
    }

    svg {
      width: 18px;
      height: auto;

      color: var(--color-grey);
    }
  }

  button.continue {
    display: flex;
    margin-top: 20px;

    align-items: center;
    justify-content: space-between;

    padding: 0 16px;
    background-color: var(--color-light-red);

    .spinner {
      width: max-content;
    }

    .spinner {
      display: none;
    }

    &.loading {
      cursor: not-allowed;

      &,
      &:hover {
        filter: brightness(1.5);
      }

      span {
        display: none;
      }

      .spinner {
        display: block;
      }
    }
  }

  @media (max-width: 500px) {
    display: flex;
    height: 100%;

    flex-direction: column;
    justify-content: space-between;

    max-width: 100%;
    border-radius: 0;

    p {
      font-size: 2rem;
    }
  }
`;
