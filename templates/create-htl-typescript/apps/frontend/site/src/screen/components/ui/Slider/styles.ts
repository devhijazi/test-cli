import styled from '@emotion/styled';

interface ImageProps {
  selected: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img<ImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;

  left: 0;
  object-fit: cover;

  opacity: ${props => (props.selected ? 1 : 0)};
  transition: opacity 800ms;
`;
