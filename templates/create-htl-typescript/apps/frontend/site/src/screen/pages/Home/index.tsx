import { useRef, useCallback, useMemo } from 'react';
import { FiCamera } from 'react-icons/fi';

import {
  Container,
  UserContainer,
  AvatarContainer,
  ButtonsContainer,
  Button,
} from './styles';

import { apply } from '@resources/cases/apply';
import { Logged } from '@resources/cases/Logged';
import { navigation } from '@resources/data/navigation';
import { useAuth } from '@resources/hooks/useAuth';
import { Avatar } from '@screen/components/ui/Avatar';
import { DefaultLayout } from '@screen/layouts/DefaultLayout';

export const Home = apply(
  (): JSX.Element => {
    const avatarInputRef = useRef<HTMLInputElement>(null);
    const { user } = useAuth();

    const links = useMemo(
      () =>
        navigation
          .filter(({ permission }) => (user?.permission ?? 4) >= permission)
          .map(({ href, title, icon: Icon }) => (
            <Button key={title} to={href} className="break-word">
              <Icon size="2.8rem" />

              <span>{title}</span>
            </Button>
          )),
      [user?.permission],
    );

    const handleAvatarButtonClick = useCallback(() => {
      // avatarInputRef.current?.click();
    }, []);

    return (
      <Container className="main-container">
        <UserContainer>
          <AvatarContainer>
            <input type="file" ref={avatarInputRef} />
            <Avatar
              size="130px"
              name={user?.full_name}
              src={user?.avatar as any}
              round
            />

            <button type="button" onClick={handleAvatarButtonClick}>
              <FiCamera size="20px" color="var(--color-white)" />
            </button>
          </AvatarContainer>

          <h2>{user?.full_name}</h2>
        </UserContainer>

        <ButtonsContainer>{links}</ButtonsContainer>
      </Container>
    );
  },
  {
    layout: DefaultLayout,
    cases: [Logged],
  },
);
