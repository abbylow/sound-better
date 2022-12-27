import {
  Container,
  Footer,
  Text,
  ActionIcon,
} from '@mantine/core';
import { IconCup, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons';

const AppFooter: React.FC = () => {
  return (
    <Footer height={{ base: 110, sm: 70 }} p="md" bg={'#fafafa'}>
      <Container size="lg" sx={{ height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', flexWrap: 'wrap' }}>
          <Text fw={700} fz="md">© 2022 SoundBetter. All rights reserved.</Text>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ActionIcon size='md' variant='transparent' color="dark" m={4}  component="a" href="https://twitter.com/Abby25855379"  target="_blank">
              <IconBrandTwitter size={24} />
            </ActionIcon>
            <ActionIcon size='md' variant='transparent' color="dark" m={4}  component="a" href="https://www.linkedin.com/in/abbylow0713/"  target="_blank">
              <IconBrandLinkedin size={24} />
            </ActionIcon>
            <ActionIcon size='md' variant='transparent' color="dark" m={4}  component="a" href="https://www.buymeacoffee.com/abbylow" target="_blank">
              <IconCup size={24} />
            </ActionIcon>
          </div>
        </div>
      </Container>
    </Footer>
  );
};

export default AppFooter;
