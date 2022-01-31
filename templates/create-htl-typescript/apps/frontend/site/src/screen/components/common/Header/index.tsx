import { useRef, useCallback } from 'react';
import { AiFillBell } from 'react-icons/ai';
import { CgMenuLeft } from 'react-icons/cg';
import { useSelector } from 'react-redux';

import { Drawer, DrawerHandles } from './fragments/Drawer';
import {
  NotificationDrawer,
  NotificationDrawerHandles,
} from './fragments/NotificationDrawer';
import { Container, OpenMenuButton, NotificationsButton } from './styles';

export function Header(): JSX.Element | null {
  const drawerRef = useRef<DrawerHandles>(null);
  const notificationdrawerRef = useRef<NotificationDrawerHandles>(null);
  const { signed } = useSelector(({ auth }) => auth);

  const openDrawer = useCallback(() => {
    drawerRef.current?.open();
  }, []);

  const openNotificationDrawer = useCallback(() => {
    notificationdrawerRef.current?.open();
  }, []);

  if (!signed) {
    return null;
  }

  return (
    <>
      <Drawer ref={drawerRef} />
      <NotificationDrawer ref={notificationdrawerRef} />

      <Container className="main-padding-x">
        <OpenMenuButton type="button" onClick={openDrawer}>
          <CgMenuLeft size="4rem" />
        </OpenMenuButton>

        <NotificationsButton type="button" onClick={openNotificationDrawer}>
          <AiFillBell />
        </NotificationsButton>
      </Container>
    </>
  );
}
