import styled from '@emotion/styled';

export const Container = styled.button`
  width: 100%;
  height: var(--wai-height);
  max-width: var(--wai-max-width);

  font-size: 2rem;
  font-weight: 400;

  color: var(--color-white);

  background-color: var(--color-favorite);
  transition: background-color 200ms;

  box-shadow: var(--main-bottom-box-shadow);
  border-radius: var(--wai-main-border-radius);

  &:hover {
    filter: brightness(1.1);
  }
`;
