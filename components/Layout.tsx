import {
  AppShell,
  Container,
} from '@mantine/core';
import AppFooter from './Footer';
import AppHeader from './Header';

interface IAppLayout {
  children: React.ReactElement;
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <Container size="lg">
      <AppShell
        padding={0}
        header={<AppHeader />}
        footer={<AppFooter />}
      >
        {children}
      </AppShell>
    </Container>
  );
};

export default AppLayout;
