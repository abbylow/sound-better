import {
  AppShell,
  Container,
  ActionIcon,
  Anchor,
  Text,
} from '@mantine/core';
import { IconHeart } from '@tabler/icons';
import { useMediaQuery } from '@mantine/hooks';
import AppFooter from './Footer';
import AppHeader from './Header';

interface IAppLayout {
  children: React.ReactElement;
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  const largeScreen = useMediaQuery('(min-width: 992px)');

  return (
    <Container size="lg">
      <AppShell
        padding={0}
        header={<AppHeader />}
        footer={<AppFooter />}
      >
        {children}
        <Anchor
          href="https://www.buymeacoffee.com/abbylow"
          target="_blank"
          pos='fixed'
          left={30}
          bottom={largeScreen ? 90 : 130}
          p={8} bg={'#ffdd00'}
          display={'flex'}
          sx={{
            borderRadius: '8px',
            alignItems: 'center',
            div: { textDecoration: 'none', color: '#2c2c2c' },
            '&:hover': { textDecoration: 'none' }
          }}
        >
          <ActionIcon size='md' variant='transparent' color="dark" mr={4}>
            <IconHeart size={20} />
          </ActionIcon>
          <Text fw={700} fz="md" mr={4}>Sponsor me</Text>
        </Anchor>
      </AppShell>
    </Container>
  );
};

export default AppLayout;
