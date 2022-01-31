import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { rgba, cssVar } from 'polished';
import { Link } from 'react-router-dom';

import { Z_INDEX } from '@screen/styles/config';

const MAIN_PADDING = '16px';

const paddingCSS = css`
  padding-left: ${MAIN_PADDING};
  padding-right: ${MAIN_PADDING};

  padding-top: ${MAIN_PADDING};
  padding-bottom: ${MAIN_PADDING};
`;

export const Container = styled(motion.div)`
  position: fixed;
  display: flex;
  z-index: ${Z_INDEX.MASTER};

  width: 100%;
  height: 100vh;
  max-width: 280px;

  top: 0;
  left: 0;
  flex-direction: column;

  color: var(--color-white);
  background-color: var(--color-favorite);
  box-shadow: var(--main-right-box-shadow);
`;

export const Header = styled.section`
  ${paddingCSS};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.4rem;
  }

  button {
    display: flex;
    position: absolute;
    right: ${MAIN_PADDING};

    svg {
      width: 3rem;
      height: auto;
      transition: transform 300ms;
    }

    &:hover svg {
      opacity: 0.85;
      transform: rotate(180deg);
    }
  }
`;

export const Content = styled.section`
  flex-grow: 1;
  overflow: auto;

  &::-webkit-scrollbar-thumb {
    background-color: ${rgba(cssVar('--color-white', '#fff'), 0.4)};
  }

  > div {
    ${paddingCSS};

    display: grid;
    width: 100%;
    gap: 12px;

    justify-content: center;
    grid-template-columns: repeat(2, auto);

    @media (max-width: 280px) {
      grid-template-columns: auto;
    }
  }
`;

export const Button = styled(Link)`
  display: flex;
  width: 100px;
  height: 100px;
  padding: 12px;

  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: var(--wai-main-border-radius);
  border: 1px solid transparent;

  &:hover {
    border-color: ${rgba(cssVar('--color-white', '#fff'), 0.3)};
  }

  span {
    margin-top: 6px;
    font-size: 1.4rem;
  }
`;

export const Settings = styled.button`
  ${paddingCSS};

  display: flex;
  align-items: center;

  &:hover {
    background-color: ${rgba(cssVar('--color-white', '#fff'), 0.05)};
  }

  span {
    margin-left: 10px;
    font-size: 1.8rem;
  }
`;
