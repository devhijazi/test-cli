import { useOutClick } from '@hitechline/reactools';
import { AnimatePresence } from 'framer-motion';
import {
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
  forwardRef,
  Ref,
  useMemo,
} from 'react';
import { FiX, FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { Container, Header, Content, Button, Settings } from './styles';
import type { DrawerHandles } from './types';

import { useAuth } from '@/resources/hooks/useAuth';
import { drawerLinks } from '@resources/data/navigation';
import { Divider } from '@screen/components/ui/Divider';
import { AlphaStyle } from '@screen/styles/AlphaStyle';
import { actions } from '@store/modules/auth/actions';

export const Drawer = forwardRef(
  (_props, ref: Ref<DrawerHandles>): JSX.Element => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const { user } = useAuth();
    const {
      addListener,
      removeListener,
      ref: outClickRef,
    } = useOutClick<HTMLDivElement>();

    const links = useMemo(
      () =>
        drawerLinks
          .filter(({ permission }) => (user?.permission ?? 4) >= permission)
          .map(({ href, title, icon: Icon }) => (
            <Button key={title} to={href} className="break-word">
              <Icon size="2.8rem" />

              <span>{title}</span>
            </Button>
          )),
      [user?.permission],
    );

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
              animate={{ left: 0 }}
              exit={{ left: '-100%' }}
              initial={{ left: '-100%' }}
            >
              <Header>
                <h2>MENU</h2>

                <button type="button" onClick={close}>
                  <FiX />
                </button>
              </Header>

              <Content className="scrollbar-custom">
                <div>{links}</div>
              </Content>

              <Divider margin="0" />

              <Settings
                type="button"
                onClick={() => dispatch(actions.logOut({}))}
              >
                <FiLogOut size="2rem" />

                <span>Sair</span>
              </Settings>
            </Container>
          </>
        )}
      </AnimatePresence>
    );
  },
);

Drawer.displayName = 'Drawer';
