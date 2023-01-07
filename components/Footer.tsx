import {
  Container,
  Footer,
  Text,
  ActionIcon,
  createStyles,
  Tooltip,
} from '@mantine/core';
import { IconBrandTelegram, IconHeart } from '@tabler/icons';

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
          <Text fw={900} fz="md">© 2022 SoundBetter. All rights reserved.</Text>

          <div className={classes.iconWrapper}>
            <Tooltip label="Feedback here">
              <a href="https://www.producthunt.com/posts/soundbetter-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-soundbetter&#0045;2" target="_blank">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=374076&theme=light" alt="SoundBetter - A&#0032;tool&#0032;to&#0032;turn&#0032;your&#0032;thoughts&#0032;to&#0032;professional&#0032;messages | Product Hunt" style={{ width: '143px', height: '32px' }} />
              </a>
            </Tooltip>
            <Tooltip label="Use in Telegram">
              <ActionIcon size='md' variant='transparent' color="dark" m={4} component="a" href="https://t.me/SoundBetterBot" target="_blank">
                <IconBrandTelegram size={24} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Sponsor us">
              <ActionIcon size='md' variant='transparent' color="dark" m={4} component="a" href="https://buy.stripe.com/dR6cNPf4db7c4JqeUV" target="_blank">
                <IconHeart color={'#db2778'} size={24} />
              </ActionIcon>
            </Tooltip>
          </div>
        </div>
      </Container>
    </Footer>
  );
};

export default AppFooter;
