import styled from '@emotion/styled';
import { darken, cssVar } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--hub-max-width);

  padding: 20px;
  align-items: center;
  justify-content: space-between;

  border-radius: 14px;
  box-shadow: var(--main-bottom-box-shadow);
  background-color: var(--color-white);

  &:hover {
    background-color: ${darken(
      0.02,
      cssVar('--color-white', '#fff') as string,
    )};
  }

  > div.icon svg {
    color: var(--color-strong-grey);
  }
`;
