import styled from '@emotion/styled';

export const Container = styled.div`
  .items {
    display: flex;
    gap: 20px;

    align-items: center;
    flex-direction: column;

    overflow: inherit !important;
  }
`;

export const NoMoreItems = styled.h1`
  margin-top: 14px;
  font-size: 2.6rem;

  color: var(--color-grey);
`;
