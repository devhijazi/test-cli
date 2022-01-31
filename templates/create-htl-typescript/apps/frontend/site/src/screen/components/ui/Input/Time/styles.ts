import styled from '@emotion/styled';
import { rgba, cssVar } from 'polished';

import { Modal } from '@screen/components/forward/Modal';

export const Container = styled.div`
  width: 100%;
  max-width: var(--wai-max-width);

  > label {
    display: block;
    width: max-content;
    margin-bottom: 3px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: var(--wai-height);
  padding: 10px;

  font-size: 14px;
  align-items: center;

  border: 1px solid var(--color-teen-grey);
  border-radius: var(--wai-main-border-radius);

  color: rgba(0, 0, 0, 0.8);
  background-color: var(--color-white);

  ${Container}.error & {
    border-color: var(--color-error);

    .icon svg {
      color: var(--color-error) !important;
    }
  }
`;

export const PickerModal = styled(Modal)`
  width: 100%;
  max-width: 400px;

  padding: 20px;
  box-shadow: var(--main-bottom-box-shadow);

  background-color: var(--color-white);
  border-radius: var(--main-bigger-border-radius);

  .close {
    display: flex;
    width: 34px;
    height: 34px;
    margin-left: auto;

    align-items: center;
    justify-content: center;

    border-radius: 50%;
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

  section {
    display: flex;
    margin-top: 20px;
    gap: 28px;

    > div {
      display: flex;
      padding: 16px 32px;
      gap: 12px;

      flex: 1;
      align-items: center;
      flex-direction: column;

      border: 2px solid var(--color-teen-grey);
      border-radius: var(--wai-main-border-radius);
      background-color: var(--color-white-grey);

      .value {
        font-weight: 900;
      }

      .title {
        font-size: 1.8rem;
      }

      .add svg {
        color: var(--color-light-green);
      }

      .remove svg {
        color: var(--color-light-red);
      }

      .remove,
      .add {
        display: flex;

        svg {
          width: 2rem;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 400px) {
    display: flex;
    height: 100%;
    max-width: 100%;

    border-radius: 0;
    flex-direction: column;

    section {
      margin: auto 0;
      flex-direction: column;
    }
  }
`;
