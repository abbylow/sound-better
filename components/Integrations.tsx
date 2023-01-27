import { Card, Title, Text, createStyles, SimpleGrid, Button, Code, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import slackLogo from '../assets/slack.svg';
import telegramLogo from '../assets/tg.svg';

const useStyles = createStyles(() => ({
  wrapper: {
    minHeight: '71vh',
    marginTop: 96,
    marginBottom: 96,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  cardContents: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Examples: React.FC = () => {
  const { classes } = useStyles();

  const largeScreen = useMediaQuery('(min-width: 992px)');

  return (
    <div className={classes.wrapper}>
      <Title weight={900} order={1} size={largeScreen ? 48 : 34} sx={() => ({ textShadow: '5px 5px 1px #a8ccf7' })}>
        Integrations
      </Title>

      <SimpleGrid
        mt={'xl'}
        cols={2}
        spacing={'lg'}
        breakpoints={[
          { maxWidth: 'md', cols: 2, spacing: 'md' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}
      >
        <Card shadow="sm" p="xl" radius="md" withBorder w={'100%'}>
          <div className={classes.cardContents}>
            <Title order={2} fw={900}>Slack</Title>
            <Text fw={700} fz="lg" mt="md" sx={{ flex: 1 }}>
              Use slash command <Code>/soundbetter</Code> in any conversation to polish your message. Your original input will be only visible to you.
            </Text>
            <Button
              variant="default"
              size={largeScreen ? 'lg' : 'md'}
              radius='md'
              mt="lg"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://sound-better-slack-app-production.up.railway.app/slack/install"
              leftIcon={
                <Image
                  width={24}
                  height={24}
                  src={slackLogo.src}
                  alt="Slack logo"
                />
              }
            >
              Add to Slack
            </Button>
          </div>
        </Card>
        <Card shadow="sm" p="xl" radius="md" withBorder w={'100%'}>
          <div className={classes.cardContents}>
            <Title order={2} fw={900}>Telegram</Title>
            <Text fw={700} fz="lg" mt="md" sx={{ flex: 1 }}>
              Direct message to @SoundBetterBot in Telegram to convert your message to be professional.
            </Text>
            <Button
              variant="default"
              size={largeScreen ? 'lg' : 'md'}
              radius='md'
              mt="lg"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/SoundBetterBot"
              leftIcon={
                <Image
                  width={24}
                  height={24}
                  src={telegramLogo.src}
                  alt="Telegram logo"
                />
              }
            >
              Use in Telegram
            </Button>
          </div>
        </Card>
      </SimpleGrid>


    </div>
  );
};

export default Examples;
