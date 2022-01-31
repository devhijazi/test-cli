import styled from '@emotion/styled';

const FOOTER_Y_SPACING = '16px';

export const Container = styled.footer`
  display: flex;

  padding-top: ${FOOTER_Y_SPACING};
  padding-bottom: ${FOOTER_Y_SPACING};

  align-items: center;
  justify-content: space-between;

  color: var(--color-white);
  background-color: var(--color-favorite);
`;

export const Paragraph = styled.p`
  font-weight: 300;
`;
