import {
  Container,
  Footer,
  Text,
  ActionIcon,
  createStyles,
  Tooltip,
} from '@mantine/core';
import { IconBrandLinkedin, IconBrandTelegram, IconBrandTwitter, IconBrandSlack } from '@tabler/icons';

const useStyles = createStyles(() => ({
  wrapper: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', flexWrap: 'wrap' },
  iconWrapper: { display: 'flex', alignItems: 'center' }
}));

const AppFooter: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Footer height={{ base: 110, sm: 70 }} p="md" bg={'#fafafa'}>
      <Container size="lg" sx={{ height: '100%' }}>
        <div className={classes.wrapper}>
          <Text fw={900} fz="md">© 2023 SoundBetter. All rights reserved.</Text>

          <div className={classes.iconWrapper}>
              <a href="https://www.producthunt.com/posts/soundbetter-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-soundbetter&#0045;2" target="_blank">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=374076&theme=light" alt="SoundBetter - A&#0032;tool&#0032;to&#0032;turn&#0032;your&#0032;thoughts&#0032;to&#0032;professional&#0032;messages | Product Hunt" style={{ width: '143px', height: '32px' }} />
              </a>
            <Tooltip label="Use in Telegram">
              <ActionIcon size='md' variant='transparent' color="dark" m={4} component="a" href="https://t.me/SoundBetterBot" target="_blank">
                <IconBrandTelegram size={24} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Use in Slack">
              <ActionIcon size='md' variant='transparent' color="dark" m={4} component="a" href="https://sound-better-slack-app-production.up.railway.app/slack/install" target="_blank">
                <IconBrandSlack size={24} />
              </ActionIcon>
            </Tooltip>
            <ActionIcon size='md' variant='transparent' color="dark" m={4} component="a" href="https://twitter.com/soundbetter_cc" target="_blank">
              <IconBrandTwitter size={24} />
            </ActionIcon>
            <ActionIcon size='md' variant='transparent' color="dark" m={4} component="a" href="https://www.linkedin.com/company/soundbettercc" target="_blank">
              <IconBrandLinkedin size={24} />
            </ActionIcon>
          </div>
        </div>
      </Container>
    </Footer>
  );
};

export default AppFooter;
