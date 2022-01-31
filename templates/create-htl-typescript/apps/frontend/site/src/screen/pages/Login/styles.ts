import styled from '@emotion/styled';

import { Form as DefaultForm } from '@screen/components/forward/Form';

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-width: 720px;

  gap: 20px;
  padding: 45px 30px;
  margin-top: 80px;
  align-items: center;

  justify-content: space-around;
  border-radius: 40px;

  background-color: var(--color-white);
  box-shadow: var(--main-bottom-box-shadow);

  @media (max-width: 720px) {
    border-radius: 0;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100px;
    height: auto;
  }
`;

export const Form = styled(DefaultForm)`
  display: flex;
  gap: 14px;

  width: 100%;
  max-width: var(--wai-max-width);
  text-align: center;
  flex-direction: column;

  h3 {
    color: var(--color-grey);
    font-weight: 400;
    font-size: 2.4rem;
  }

  button {
    background-color: var(--color-favorite);
  }
`;
