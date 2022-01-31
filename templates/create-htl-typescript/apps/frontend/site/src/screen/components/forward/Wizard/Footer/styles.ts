import styled from '@emotion/styled';

import { MAIN_PADDING } from '../constants';

export const Container = styled.footer`
  display: flex;
  margin-top: 60px;

  padding: ${MAIN_PADDING} ${MAIN_PADDING} 30px ${MAIN_PADDING};

  align-items: center;
  justify-content: center;
`;

const BaseButton = styled.button`
  width: 100%;

  max-width: 120px;
  font-size: 2.2rem;

  color: #ffffff;

  padding: 12px 18px;
  border-radius: 4px;

  & + button {
    margin-left: 8px;
  }
`;

export const BackButton = styled(BaseButton)`
  background-color: #2c2c2c;
`;

export const NextButton = styled(BaseButton)`
  background-color: #4c8880;
`;
