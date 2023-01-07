import type { NextPage } from 'next';
import { Container } from '@mantine/core';
import Playground from '../components/Playground';
import Examples from '../components/Examples';

const Home: NextPage = () => {
  return (
    <Container size={'lg'} mt={95} p={24} display={'flex'} ta={'center'} sx={{ flexDirection: 'column', alignItems: 'center' }}>
      <Playground />
      <Examples />
    </Container>
  );
};

export default Home;
