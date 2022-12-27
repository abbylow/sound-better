import {
  Container,
  Footer,
  Text,
  Image,
} from '@mantine/core';
import { socialMedia } from '../constants/links';

const AppFooter: React.FC = () => {
  return (
    <Footer height={{ base: 110, sm: 70 }} p="md" sx={{ backgroundColor: "#fafafa" }}>
      <Container size="lg" sx={{ height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', flexWrap: 'wrap' }}>
          <Text fw={700} fz="md">© 2022 SoundBetter. All rights reserved.</Text>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            {
              socialMedia.map(sm => (
                <a
                  href={sm.link}
                  target={'_blank'}
                  rel='noreferrer noopener'
                  key={sm.link}
                >
                  <Image
                    width={28}
                    height={28}
                    src={sm.imgSrc}
                    alt={sm.imgAlt}
                    sx={{ margin: '4px' }}
                  />
                </a>
              ))
            }
          </div>
        </div>
      </Container>
    </Footer>
  );
};

export default AppFooter;
