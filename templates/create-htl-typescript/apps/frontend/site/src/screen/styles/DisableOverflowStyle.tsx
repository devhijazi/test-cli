import { Global, css } from '@emotion/react';

export function DisableOverflowStyle(): JSX.Element {
  return (
    <Global
      styles={css`
        body {
          overflow: hidden;
        }
      `}
    />
  );
}
