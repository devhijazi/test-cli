import styled from '@emotion/styled';

export const Container = styled.button`
  width: 100%;
  height: var(--wai-height);
  max-width: 240px;

  font-size: 1.8rem;
  font-weight: 300;

  color: var(--color-white);
  background-color: var(--color-favorite);

  box-shadow: var(--main-bottom-box-shadow);
  border-radius: var(--wai-main-border-radius);

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
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  margin: 0 auto;

  border: 2px solid transparent;
  animation: spinner 300ms linear infinite;

  border-top: 2px solid #fff;
  border-left: 2px solid #fff;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
