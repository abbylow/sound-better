import {
  Container,
  Header,
  Text,
  Image,
} from '@mantine/core';

import soundBetterLogo from '../assets/logo.svg';

const AppHeader: React.FC = () => {
  return (
    <Header
      height={60}
      p="md"
      sx={{ backgroundColor: '#fafafa' }}
    >
      <Container size="lg">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Image
            width={28}
            height={28}
            src={soundBetterLogo.src}
            alt="Sound Better logo"
            sx={{ marginRight: '4px' }}
          />
          <Text fw={700} fz="xl">SoundBetter</Text>
        </div>
      </Container>
    </Header>
  );
};

export default AppHeader;
