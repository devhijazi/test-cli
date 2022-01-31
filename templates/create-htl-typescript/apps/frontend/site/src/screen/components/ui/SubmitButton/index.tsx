import { mergeClassNames } from '@hitechline/reactools';
import { useContext, ButtonHTMLAttributes } from 'react';

import { Container, Spinner } from './styles';

import { FormContext } from '@screen/components/forward/Form';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function SubmitButton({
  text,
  className,
  ...props
}: Props): JSX.Element {
  const { loading, safeSubmit } = useContext(FormContext);

  return (
    <Container
      {...props}
      type="button"
      onClick={safeSubmit}
      className={mergeClassNames(className, { loading })}
    >
      <Spinner color="#fff" className="spinner" />

      <span>{text}</span>
    </Container>
  );
}
