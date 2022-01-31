import styled from '@emotion/styled';

import { Z_INDEX } from '@screen/styles/config';

const HEADER_Y_SPACING = '12px';

export const Container = styled.header`
  display: flex;
  height: 58px;
  z-index: ${Z_INDEX.MAIN};

  padding-top: ${HEADER_Y_SPACING};
  padding-bottom: ${HEADER_Y_SPACING};

  align-items: center;
  justify-content: space-between;

  color: var(--color-white);
  background-color: var(--color-favorite);

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const OpenMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationsButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;

  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: var(--color-white);

  svg {
    width: 20px;
    height: auto;

    color: var(--color-favorite);
  }
`;
