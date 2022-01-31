import styled from '@emotion/styled';

import { Form } from '@screen/components/forward/Form';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;

  gap: 20px;
  align-items: center;
`;

const INPUT_SPACING = '14px';

export const Box = styled.section`
  --wai-max-width: 100%;

  display: grid;
  padding: 15px;
  width: 100%;

  gap: ${INPUT_SPACING};
  grid-template-columns: repeat(2, 1fr);
  border-radius: 6px;

  box-shadow: var(--main-bottom-box-shadow);
  background-color: var(--color-white);

  button {
    background-color: var(--color-weak-black);
    color: var(--color-white);

    padding: 10px;
    border-radius: 6px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
