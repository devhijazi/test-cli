import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-width: 230px;

  padding: 10px;
  user-select: none;

  flex-direction: column;
  justify-content: space-between;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);

  h3,
  p {
    margin-left: 10px;
  }

  h3 {
    color: #000;
    font-size: 2.5rem;
  }

  p {
    margin-top: 6px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }

  &::before {
    content: '';
    width: 4px;
    height: calc(100% - 20px);

    top: 50%;
    left: 10px;

    transform: translateY(-50%);
    background-color: #009895;
  }
`;
