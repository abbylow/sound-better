import {
  AppShell,
  Container,
  Header,
  Text,
  Image,
} from '@mantine/core';

import soundBetterLogo from '../assets/logo.svg';

interface IAppLayout {
  children: React.ReactElement;
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <Container size="lg">
      <AppShell
        padding={0}
        header={
          <Header height={60} p="md">
            <Container size="lg">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Image
                  width={28}
                  height={28}
                  src={soundBetterLogo.src}
                  alt="Sound Better logo"
                  style={{ marginRight: '4px' }}
                />
                <Text fw={700} fz="xl">SoundBetter</Text>
              </div>
            </Container>
          </Header>
        }
      >
        {children}
      </AppShell>
    </Container>
  );
};

export default AppLayout;
