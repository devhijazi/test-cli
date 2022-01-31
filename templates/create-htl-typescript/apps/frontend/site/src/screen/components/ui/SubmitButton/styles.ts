import styled from '@emotion/styled';

import { Button } from '@screen/components/ui/Button';

export const Container = styled(Button)`
  margin-top: 15px;

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
