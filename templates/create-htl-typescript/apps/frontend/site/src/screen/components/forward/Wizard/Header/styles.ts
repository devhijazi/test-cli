import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { MAIN_PADDING } from '../constants';

interface BarActiveProps {
  active: boolean;
}

const barCSS = css`
  width: 100%;
  height: 12px;

  background-color: #ffffff;
  transition-delay: 2s;
  transition: background-color 800ms;
`;

const getActiveCSS = ({ active }: BarActiveProps): boolean | SerializedStyles =>
  active &&
  css`
    background-color: #4c8880 !important;
  `;

export const Container = styled.header``;

export const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -3px;
`;

const BaseBar = styled.span<BarActiveProps>`
  ${barCSS};
  ${getActiveCSS}
`;

export const MainBar = styled(BaseBar)`
  flex-grow: 1;
`;

export const Bar = styled(BaseBar)`
  max-width: 150px;
`;

export const Break = styled.div<BarActiveProps>`
  ${getActiveCSS};

  z-index: 2;
  width: 18px;
  height: 18px;

  flex-shrink: 0;
  border-radius: 50%;

  background-color: #848484;
  box-shadow: 0 0 0 4px #dbdbdb;
`;

export const InfoContainer = styled.div`
  margin-top: 12px;
  padding: 0 ${MAIN_PADDING} ${MAIN_PADDING} ${MAIN_PADDING};

  h4 {
    font-weight: normal;
  }
`;
