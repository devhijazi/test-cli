import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;

  max-width: 500px;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;

  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  transition: height 250ms;
`;

export const Header = styled.header`
  position: sticky;
  display: flex;

  width: 100%;
  padding: 10px;

  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 2rem;
  }

  button {
    display: flex;
    padding: 5px;
    border-radius: 4px;
    transition: background-color 200ms;

    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
    }
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Footer = styled.footer`
  display: flex;
  position: sticky;

  width: 100%;

  bottom: 0;
  padding: 10px;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;
