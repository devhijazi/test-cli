import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > section {
    display: flex;
    flex-wrap: wrap;

    img {
      margin: 8px;
      width: 50px;
      height: auto;
      object-fit: cover;
    }
  }
`;
