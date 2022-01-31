import { useAsync, mergeClassNames } from '@hitechline/reactools';
import { useContext, useState, useEffect, useRef, useCallback } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiUserCircle, BiLock } from 'react-icons/bi';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FiTrash2, FiPhone, FiX } from 'react-icons/fi';
import { TiPencil } from 'react-icons/ti';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Form, DeleteModal, Options, Box } from './styles';

import { Logged } from '@/resources/cases/Logged';
import {
  BackHeaderLayout,
  BackHeaderLayoutContext,
} from '@/screen/layouts/BackHeaderLayout';
import { api } from '@modules/services/api';
import { apply } from '@resources/cases/apply';
import type { FormSubmit, FormHandles } from '@screen/components/forward/Form';
import type { ModalHandles } from '@screen/components/forward/Modal';
import { Button } from '@screen/components/ui/Button';
import { InputEdit } from '@screen/components/ui/InputEdit';
import { SaveButton } from '@screen/components/ui/SaveButton';
import { Spinner } from '@screen/components/ui/Spinner';

export const EmployeeEdit = apply(
  (): JSX.Element => {
    const history = useHistory();
    const formRef = useRef<FormHandles>(null);
    const modalRef = useRef<ModalHandles>(null);

    const [editable, updateEditable] = useState(false);
    const [inDelete, updateInDelete] = useState(false);

    const { id } = useParams<{ id: string }>();
    const { setTitle } = useContext(BackHeaderLayoutContext);

    const handleEdit = useCallback(() => {
      updateEditable(oldValue => !oldValue);
    }, []);

    const closeDeleteModal = useCallback(() => {
      modalRef.current?.close();
    }, []);

    const openDeleteModal = useCallback(() => {
      modalRef.current?.open();
    }, []);

    const getEmployeeData = useCallback(
      () =>
        api
          .get<GetEmployeeHttpData>(`employees/${id}`)
          .then(({ data }) => data.employee),
      [id],
    );

    const { error, loading, data: employeeData } = useAsync(() =>
      api
        .get<GetEmployeeHttpData>(`employees/${id}`)
        .then(({ data }) => data.employee),
    );

    const handleSubmit: FormSubmit<any> = useCallback(
      async data => {
        await api.put(`employees/${id}`, data);

        updateEditable(false);
        toast.success(`${employeeData?.full_name} atualizado com sucesso`);

        const newEmployeeData = await getEmployeeData();

        formRef.current?.getUnformRef().current?.setData(newEmployeeData);
      },
      [id, employeeData, getEmployeeData],
    );

    const handleDelete = useCallback(async () => {
      updateInDelete(true);

      try {
        await api.delete(`employees/${id}`);
        history.push('/employees');
      } finally {
        closeDeleteModal();
        updateInDelete(false);
      }
    }, [id, history, closeDeleteModal]);

    useEffect(() => {
      setTitle('Detalhes Funcionário');
    }, [setTitle]);

    useEffect(() => {
      if (error) {
        history.push('/employees');
      }
    }, [error, history]);

    return (
      <Container>
        <DeleteModal ref={modalRef}>
          <button type="button" className="close" onClick={closeDeleteModal}>
            <FiX />
          </button>

          <p>
            Deseja continuar e deletar o funcionário{' '}
            <strong>{employeeData?.full_name}</strong>?
          </p>

          <Button
            onClick={handleDelete}
            className={mergeClassNames('continue', { loading: inDelete })}
          >
            <Spinner color="#fff" className="spinner" />
            <span>Continuar</span>
            <FaLongArrowAltRight />
          </Button>
        </DeleteModal>

        {loading ? (
          <Spinner size="30px" />
        ) : (
          <>
            <Options>
              <button type="button" onClick={handleEdit}>
                <TiPencil />
              </button>

              <button
                type="button"
                className="delete"
                onClick={openDeleteModal}
              >
                <FiTrash2 />
              </button>
            </Options>

            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              initialData={employeeData}
              className={mergeClassNames({ editable })}
            >
              <Box>
                <InputEdit
                  label="Nome Funcionário"
                  icon={BiUserCircle}
                  name="full_name"
                  placeholder="Nome completo"
                />

                <InputEdit
                  label="E-mail"
                  icon={AiOutlineMail}
                  name="email"
                  placeholder="E-mail"
                />

                <InputEdit
                  icon={FiPhone}
                  name="phone"
                  placeholder="Telefone"
                  mask="(99) \9 9999-9999"
                  label="Telefone"
                />
                <InputEdit
                  icon={BiLock}
                  name="password"
                  placeholder="Senha de acesso"
                  label="Senha de acesso"
                />
              </Box>

              {editable && <SaveButton />}
            </Form>
          </>
        )}
      </Container>
    );
  },
  {
    layout: BackHeaderLayout,
    cases: [Logged],
  },
);
