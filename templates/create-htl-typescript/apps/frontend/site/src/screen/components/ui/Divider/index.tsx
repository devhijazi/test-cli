import styled from '@emotion/styled';
import { mergeClassNames } from '@hitechline/reactools';
import { rgba } from 'polished';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  margin?: string;
  opacity?: number;
  background?: string;
}

export function Divider({
  className,
  margin = '5px',
  opacity = 0.15,
  background = '#000000',
  ...rest
}: Props): JSX.Element {
  const Container = styled.div`
    width: 100%;
    margin: ${margin} 0;
    border-top: 1px solid ${rgba(background, opacity)};
  `;

  return (
    <Container {...rest} className={mergeClassNames('divider', className)} />
  );
}
