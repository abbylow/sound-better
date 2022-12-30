import {
  Container,
  Footer,
  Text,
  ActionIcon,
  createStyles,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandGithub } from '@tabler/icons';

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
            <ActionIcon size='md' variant='transparent' color="dark" m={4}  component="a" href="https://twitter.com/Abby25855379"  target="_blank">
              <IconBrandTwitter size={24} />
            </ActionIcon>
            <ActionIcon size='md' variant='transparent' color="dark" m={4}  component="a" href="https://github.com/abbylow"  target="_blank">
              <IconBrandGithub size={24} />
            </ActionIcon>
          </div>
        </div>
      </Container>
    </Footer>
  );
};

export default AppFooter;
