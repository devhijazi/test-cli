import { useRef, useContext, useEffect, useCallback } from 'react';
import { GrSearch } from 'react-icons/gr';

import { HeroSearchContext } from './Context';
import { Container, InputContainer } from './styles';

interface Props {
  title: string;
  placeholder?: string;
}

export function HeroSearch({ title, placeholder }: Props): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { setSearch } = useContext(HeroSearchContext);

  const handleSubmit = useCallback(
    (event: Event) => {
      event.preventDefault();

      setSearch(inputRef.current?.value ?? '');
    },
    [setSearch],
  );

  useEffect(() => {
    const currentFormRef = formRef.current;

    currentFormRef?.addEventListener('submit', handleSubmit);

    return () => {
      currentFormRef?.removeEventListener('submit', handleSubmit);
    };
  }, [handleSubmit]);

  return (
    <Container ref={formRef} className="main-padding-x">
      <h4>{title}</h4>

      <InputContainer>
        <div className="icon">
          <GrSearch />
        </div>

        <input type="text" ref={inputRef} placeholder={placeholder} />
      </InputContainer>
    </Container>
  );
}
