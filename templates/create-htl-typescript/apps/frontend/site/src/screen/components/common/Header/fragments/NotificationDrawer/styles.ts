import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Z_INDEX } from '@screen/styles/config';

const SPACING_Y = '16px';
const SPACING_X = '10px';

const paddingCSS = css`
  padding: ${SPACING_Y} ${SPACING_X};
`;

export const Container = styled(motion.div)`
  --space: 12px;

  position: fixed;
  display: flex;
  z-index: ${Z_INDEX.MASTER};

  flex-direction: column;

  width: 100%;
  height: calc(100vh - (var(--space) * 2));
  max-width: 280px;

  top: var(--space);
  margin-right: var(--space);

  border-radius: 8px;

  color: var(--color-white);
  background-color: var(--color-white);
  box-shadow: var(--main-box-shadow);
`;

export const Header = styled.section`
  ${paddingCSS};

  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;

  color: var(--color-black);
  border-bottom: 1px dashed var(--color-teen-grey);

  h2 {
    font-size: 1.8rem;
  }

  button {
    display: flex;

    svg {
      width: 2.6rem;
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
  --margin: 4px;
  --space-x: calc(${SPACING_X} - var(--margin));
  --space-y: calc(${SPACING_Y} - var(--margin));

  padding-top: 0;

  display: flex;
  flex-grow: 1;
  overflow: auto;

  flex-direction: column;

  gap: 8px;
  margin: ${SPACING_X} var(--margin) var(--margin) var(--margin);
  padding: 0 var(--space-x) var(--space-y) var(--space-x);

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.09);
  }
`;

export const Card = styled(Link)`
  display: flex;
  padding: 12px;

  color: var(--color-favorite);
  border-radius: 6px;
  background-color: rgba(var(--color-favorite-rgb), 0.2);

  flex-direction: column;

  h3 {
    text-transform: uppercase;

    font-size: 1.6rem;
    font-weight: 700;
  }

  .notification-info {
    margin-top: 10px;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const NoMoreItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.6rem;
    text-transform: uppercase;
    color: var(--color-strong-grey);
  }
`;
