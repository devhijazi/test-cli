import { useEffect, useContext, useCallback, useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiUserCircle, BiLock } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Box } from './styles';

import { api } from '@modules/services/api';
import { apply } from '@resources/cases/apply';
import { Logged } from '@resources/cases/Logged';
import { employeeCreateSchema } from '@resources/schemas/employee';
import type { FormSubmit, FormHandles } from '@screen/components/forward/Form';
import { Input } from '@screen/components/ui/Input';
import { SaveButton } from '@screen/components/ui/SaveButton';
import {
  BackHeaderLayout,
  BackHeaderLayoutContext,
} from '@screen/layouts/BackHeaderLayout';

interface FormEmployeeData {
  email: string;
  password: string;
  full_name: string;
  phone?: string;
}

export const EmployeeCreate = apply(
  (): JSX.Element => {
    const history = useHistory();
    const formRef = useRef<FormHandles>(null);

    const { setTitle } = useContext(BackHeaderLayoutContext);

    const handleSubmit: FormSubmit<FormEmployeeData> = useCallback(
      async data => {
        await api.post('employees', data);

        history.push('/employees');
        toast.success('Funcionário cadastrado com sucesso!');
      },
      [history],
    );

    useEffect(() => {
      setTitle('Adicionar novo usuário');
    }, [setTitle]);

    return (
      <Container
        ref={formRef}
        schema={employeeCreateSchema}
        onSubmit={handleSubmit}
      >
        <Box>
          <Input
            icon={BiUserCircle}
            name="full_name"
            placeholder="Nome completo"
          />
          <Input icon={AiOutlineMail} name="email" placeholder="E-mail" />

          <Input
            icon={FiPhone}
            name="phone"
            placeholder="Telefone"
            mask="(99) \9 9999-9999"
          />
          <Input icon={BiLock} name="password" placeholder="Senha de acesso" />
        </Box>

        <SaveButton />
      </Container>
    );
  },
  {
    layout: BackHeaderLayout,
    cases: [Logged],
  },
);
