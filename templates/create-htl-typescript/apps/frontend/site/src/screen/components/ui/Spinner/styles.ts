import styled from '@emotion/styled';

interface SpinnerProps {
  size: string;
  color: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div<SpinnerProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  border: 2px solid transparent;
  border-top: 2px solid ${({ color }) => color};
  border-left: 2px solid ${({ color }) => color};

  border-radius: 50%;
  animation: spinner 300ms linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
