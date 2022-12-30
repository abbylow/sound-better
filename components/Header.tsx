import {
  Container,
  Header,
  Text,
  Image,
  createStyles,
} from '@mantine/core';

import soundBetterLogo from '../assets/logo.svg';

const useStyles = createStyles(() => ({
  wrapper: { display: 'flex', alignItems: 'center', height: '100%' }
}));

const AppHeader: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Header height={60} p="md" bg={'#fafafa'}>
      <Container size="lg">
        <div className={classes.wrapper}>
          <Image
            width={28}
            height={28}
            src={soundBetterLogo.src}
            alt="Sound Better logo"
            mr={4}
          />
          <Text fw={900} fz="xl">SoundBetter</Text>
        </div>
      </Container>
    </Header>
  );
};

export default AppHeader;
