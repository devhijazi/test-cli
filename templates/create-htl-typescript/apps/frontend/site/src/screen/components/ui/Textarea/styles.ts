import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 450px;

  > label {
    display: block;
    width: max-content;
    margin-bottom: 3px;
  }
`;

export const TextareaElement = styled.textarea`
  display: block;
  padding: 10px;

  width: 100%;
  min-height: 100px;

  font-size: 14px;

  color: rgba(0, 0, 0, 0.8);
  background-color: var(--color-white);

  resize: vertical;

  border: 1px solid var(--color-teen-grey);
  border-radius: var(--wai-main-border-radius);
  background-color: var(--color-white);

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }

  ${Container}.error & {
    border-color: var(--color-error);
  }
`;

export const Error = styled.div`
  display: block;
  margin-top: 4px;
  font-size: 12px;

  text-align: left;
  color: #f04747;
  text-transform: uppercase;
`;
