import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  > span {
    position: absolute;
    width: 160px;

    left: 50%;
    bottom: calc(100% + 12px);
    transform: translateX(-50%);

    padding: 8px;
    opacity: 0;

    visibility: hidden;
    font-size: 14px;

    font-weight: 500;
    color: #312e38;
    border-radius: 4px;
    background: #ff9000;
    transition: opacity 0.4s;

    &:before {
      content: '';
      position: absolute;

      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      border-style: solid;
      border-width: 6px 6px 0 6px;
      border-color: #ff9000 transparent;
    }
  }

  &:hover > span {
    opacity: 1;
    visibility: visible;
  }
`;
