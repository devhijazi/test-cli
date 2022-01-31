import { useCallback } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { GoKey } from 'react-icons/go';

import { Container, ImageContainer, Form } from './styles';

import { apply } from '@resources/cases/apply';
import { NotLogged } from '@resources/cases/NotLogged';
import { useAuth } from '@resources/hooks/useAuth';
import { loginSchema } from '@resources/schemas/login';
import { Input } from '@screen/components/ui/Input';
import { SubmitButton } from '@screen/components/ui/SubmitButton';
import { DefaultLayout } from '@screen/layouts/DefaultLayout';

export const Login = apply(
  (): JSX.Element => {
    const { authenticate } = useAuth();

    const handleSubmit = useCallback(
      ({ email, password }: SessionLoginData) =>
        authenticate({ email, password }),
      [authenticate],
    );

    return (
      <Container className="main-container">
        <ImageContainer>
          <img src="/img/icons/padlock.svg" alt="PadLock" />
        </ImageContainer>

        <Form submit="LOGIN" schema={loginSchema} onSubmit={handleSubmit}>
          <h3>Entrar</h3>

          <Input icon={BiUserCircle} name="email" placeholder="E-mail" />
          <Input
            icon={GoKey}
            name="password"
            placeholder="Senha"
            type="password"
          />

          <SubmitButton text="Entrar" />
        </Form>
      </Container>
    );
  },
  {
    layout: DefaultLayout,
    cases: [NotLogged],
  },
);
