import { useOutClick, useAsync } from '@hitechline/reactools';
import { AnimatePresence } from 'framer-motion';
import { duration } from 'moment';
import {
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
  forwardRef,
  Ref,
} from 'react';
import { FiX } from 'react-icons/fi';

import { Container, Content, Header, Card, NoMoreItems } from './styles';
import type { NotificationDrawerHandles } from './types';

import { api } from '@modules/services/api';
import { AlphaStyle } from '@screen/styles/AlphaStyle';

export const NotificationDrawer = forwardRef(
  (_props, ref: Ref<NotificationDrawerHandles>): JSX.Element => {
    const [visible, setVisible] = useState(false);

    const {
      addListener,
      removeListener,
      ref: outClickRef,
    } = useOutClick<HTMLDivElement>();

    const { data: notifications } = useAsync(async () => {
      const { data: apiData } = await api.get<GetNotificationsHttpData>(
        '/notifications',
      );

      return apiData;
    });

    const open = useCallback(() => {
      setTimeout(() => {
        setVisible(true);
      }, 0);
    }, []);

    const close = useCallback(() => {
      setVisible(false);
    }, []);

    const handleOutClick = useCallback(() => {
      if (!visible) {
        return;
      }

      close();
    }, [visible, close]);

    useImperativeHandle(
      ref,
      () => ({
        open,
        close,
      }),
      [open, close],
    );

    useEffect(() => {
      addListener(handleOutClick);

      return () => {
        removeListener(handleOutClick);
      };
    }, [addListener, removeListener, handleOutClick]);

    return (
      <AnimatePresence>
        {visible && (
          <>
            <AlphaStyle base="MASTER" />

            <Container
              ref={outClickRef}
              transition={{ duration: 0.3 }}
              animate={{ right: 0 }}
              exit={{ right: '-100%' }}
              initial={{ right: '-100%' }}
            >
              <Header>
                <h2>NOTIFICAÇÕES</h2>

                <button type="button" onClick={close}>
                  <FiX />
                </button>
              </Header>

              <Content className="scrollbar-custom">
                {notifications && notifications.length ? (
                  notifications.map(({ customer, due_in, overdue }) => (
                    <Card
                      key={customer.id}
                      to={`/customers/${customer.id}/select`}
                    >
                      <h3>{customer.full_name}</h3>

                      <div className="notification-info">
                        <p>
                          {overdue
                            ? 'Expirou'
                            : `Expira em ${duration(due_in).format(
                                'd[d] h[h] m[m] s[s]',
                              )}`}
                        </p>
                      </div>
                    </Card>
                  ))
                ) : (
                  <NoMoreItems>
                    <h1>Nada por aqui.</h1>
                  </NoMoreItems>
                )}
              </Content>
            </Container>
          </>
        )}
      </AnimatePresence>
    );
  },
);

NotificationDrawer.displayName = 'NotificationDrawer';
