import {
  Container,
  Header,
  Text,
  Image,
} from '@mantine/core';

import soundBetterLogo from '../assets/logo.svg';

const AppHeader: React.FC = () => {
  return (
    <Header height={60} p="md" bg={'#fafafa'}>
      <Container size="lg">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Image
            width={28}
            height={28}
            src={soundBetterLogo.src}
            alt="Sound Better logo"
            mr={4}
          />
          <Text fw={700} fz="xl">SoundBetter</Text>
        </div>
      </Container>
    </Header>
  );
};

export default AppHeader;
