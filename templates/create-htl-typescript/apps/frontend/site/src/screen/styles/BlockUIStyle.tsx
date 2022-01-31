import { Global, css } from '@emotion/react';

export function BlockUIStyle(): JSX.Element {
  return (
    <Global
      styles={css`
        body {
          overflow: hidden;
        }

        #root {
          filter: blur(3px);
        }
      `}
    />
  );
}
