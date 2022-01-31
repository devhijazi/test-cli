import { mergeClassNames } from '@hitechline/reactools';
import { useField } from '@unform/core';
import { useRef, useMemo, useEffect, TextareaHTMLAttributes } from 'react';

import { Container, TextareaElement, Error } from './styles';

import { generateRandomString } from '@modules/utils/generateRandomString';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}

export function Textarea({
  name,
  label,
  className,
  ...rest
}: Props): JSX.Element {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const id = useMemo(() => generateRandomString(), []);

  useEffect(() => {
    registerField({
      path: 'value',
      name: fieldName,
      ref: ref.current,
    });
  }, [fieldName, registerField]);

  return (
    <Container
      className={mergeClassNames(className, {
        error: Boolean(error),
      })}
    >
      {label && <label htmlFor={id}>{label}</label>}

      <TextareaElement
        id={id}
        ref={ref}
        name={name}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && (
        <Error>
          <span>{error}</span>
        </Error>
      )}
    </Container>
  );
}
