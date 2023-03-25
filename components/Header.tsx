import {
  Container,
  Header,
  Text,
  Image,
  createStyles,
  Anchor,
  ActionIcon,
} from '@mantine/core';
import { IconBrandSlack } from '@tabler/icons';

import soundBetterLogo from '../assets/logo.svg';

const useStyles = createStyles(() => ({
  wrapper: { display: 'flex', alignItems: 'center', height: '100%' }
}));

const AppHeader: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Header height={96} bg={'#fafafa'} fixed={true}>
      <Anchor
        href={'https://sound-better-slack-app-production.up.railway.app/slack/install'}
        target="_blank"
        p={'4px 0'}
        bg={'#4A154B'}
        display={'flex'}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          div: { textDecoration: 'none', color: 'white' },
          '&:hover': { textDecoration: 'none' }
        }}
        className="plausible-event-name=SlackBanner"
      >
        {/* <ActionIcon size='md' variant='transparent' color="dark" mr={2}>
          <IconBrandSlack color={'white'} size={20} />
        </ActionIcon>
        <Text fw={700} fz={{base: 'sm', sm: 'md'}}>Slack App is live now!</Text> */}
        <Text fw={700} fz={{base: 'sm', sm: 'md'}}>The service is unavailable now as we ran out of API credits. We are working on it. </Text>
      </Anchor>

      <Container size="lg" p="md">
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
