import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  size?: string[];
  spacing?: string;
}

export const ScopedInputStyle = styled.section<Props>`
  display: flex;
  width: 100%;
  gap: ${({ spacing = '0' }) => spacing};

  ${({ size = [] }) =>
    size.map(
      (value, index) => css`
        > div:nth-child(${index + 1}) {
          width: ${value};
        }
      `,
    )}
`;
