import { mergeRefs, mergeClassNames } from '@hitechline/reactools';
import {
  useRef,
  forwardRef,
  useCallback,
  ReactNode,
  HTMLAttributes,
  PropsWithChildren,
  Ref,
} from 'react';
import { FiX } from 'react-icons/fi';

import { Container, Header, Content, Footer } from './styles';

import { Modal, ModalHandles } from '@screen/components/forward/Modal';

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  footer: ReactNode;
}

function ForwardModalWithHeaderAndFooter(
  { title, footer, children, className, ...rest }: PropsWithChildren<Props>,
  ref: Ref<ModalHandles>,
): JSX.Element {
  const modalRef = useRef<ModalHandles>(null);

  const close = useCallback(() => {
    modalRef.current?.close();
  }, [modalRef]);

  return (
    <Modal ref={mergeRefs([ref, modalRef])}>
      <Container
        {...rest}
        className={mergeClassNames('modal-container', className)}
      >
        <Header className="modal-header">
          <h1>{title}</h1>

          <button type="button" onClick={close}>
            <FiX size="2.5rem" color="#000" />
          </button>
        </Header>

        <Content className="modal-content">{children}</Content>
        <Footer className="modal-footer">{footer}</Footer>
      </Container>
    </Modal>
  );
}

export const ModalWithHeaderAndFooter = forwardRef(
  ForwardModalWithHeaderAndFooter,
);
