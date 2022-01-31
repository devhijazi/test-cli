import styled from '@emotion/styled';

import { MAIN_PADDING } from './constants';

import { Divider as DividerComponent } from '@screen/components/ui/Divider';

export const Divider = styled(DividerComponent)`
  width: calc(100% - (${MAIN_PADDING} * 2)) !important;
  transform: translateX(${MAIN_PADDING});
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e3e3e3;
`;

export const Content = styled.div`
  margin-top: 10px;
  padding: ${MAIN_PADDING};
`;
