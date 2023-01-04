import { AppShell } from '@mantine/core';
import AppFooter from './Footer';
import AppHeader from './Header';

interface IAppLayout {
  children: React.ReactElement;
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <AppShell
      fixed={false}
      header={<AppHeader />}
      footer={<AppFooter />}
      styles={{ body: { height: '100vh' } }}
    >
      {children}
    </AppShell>
  );
};

export default AppLayout;
