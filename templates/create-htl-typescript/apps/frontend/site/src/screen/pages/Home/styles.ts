import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CONTAINER_SPACING = '50px';

export const Container = styled.div`
  position: relative;
  flex-grow: 1;

  padding-top: ${CONTAINER_SPACING};
  padding-bottom: ${CONTAINER_SPACING};
`;

export const UserContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 12px;
    color: var(--color-weak-black);

    font-size: 2.6rem;
    font-weight: 400;
  }
`;

const CAMERA_BUTTON_SIZE = '40px';

export const AvatarContainer = styled.div`
  position: relative;

  input {
    display: none;
  }

  button {
    display: flex;
    position: absolute;
    cursor: not-allowed;

    right: -2px;
    bottom: -2px;

    width: ${CAMERA_BUTTON_SIZE};
    height: ${CAMERA_BUTTON_SIZE};

    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: var(--color-favorite);
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  margin-top: 80px;
  gap: 30px;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const BUTTON_SIZE = '110px';

export const Button = styled(Link)`
  display: flex;
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};

  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--color-white);
  box-shadow: var(--main-bottom-box-shadow);
  border-radius: var(--wai-main-border-radius);
  background-color: var(--color-favorite);

  span {
    margin-top: 10px;
  }
`;
