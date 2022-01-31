import { mergeRefs } from '@hitechline/reactools';
import { useRef, forwardRef, useCallback, Ref, HTMLAttributes } from 'react';
import { FiX } from 'react-icons/fi';

import { Container, Header, Content } from './styles';

import { Modal, ModalHandles } from '@screen/components/forward/Modal';

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
}

function ForwardModalWithHeader(
  { title, children, className, ...rest }: PropsWithChildren<Props>,
  ref: Ref<ModalHandles>,
): JSX.Element {
  const modalRef = useRef<ModalHandles>(null);

  const close = useCallback(() => {
    modalRef.current?.close();
  }, [modalRef]);

  return (
    <Modal ref={mergeRefs([ref, modalRef])}>
      <Container {...rest} className={(className || '') as any}>
        <Header>
          <h1>{title}</h1>

          <button type="button" onClick={close}>
            <FiX size="2.5rem" color="#000" />
          </button>
        </Header>

        <Content>{children}</Content>
      </Container>
    </Modal>
  );
}

export const ModalWithHeader = forwardRef(ForwardModalWithHeader);
