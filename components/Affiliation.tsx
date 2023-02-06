import { createStyles, Title, Text, Space, Card, SimpleGrid } from "@mantine/core";
import Image from 'next/image'
import { useMediaQuery } from "@mantine/hooks";
import msLogo from '../assets/ms.png'

const useStyles = createStyles(() => ({
  wrapper: {
    minHeight: '60vh',
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

const Affiliation: React.FC = () => {
  const { classes } = useStyles();

  const largeScreen = useMediaQuery('(min-width: 992px)');

  return (
    <div className={classes.wrapper}>
      <Title weight={900} order={1} size={largeScreen ? 48 : 34} sx={() => ({ textShadow: '5px 5px 1px #a8ccf7' })}>
        Affiliation
      </Title>

      <SimpleGrid
        mt={'xl'}
        cols={1}
        spacing={'lg'}
        breakpoints={[
          { maxWidth: 'md', cols: 1, spacing: 'md' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}
      >
        <Card shadow="sm" p="xl" radius="md" withBorder w={'100%'}>
          <div className={classes.cardContents}>
            <Text fw={700} fz="xl">
              Microsoft for Startups Founders Hub
            </Text>

            <Space h="xl" />

            <div>
              <Image
                width={largeScreen ? 393 : 220}
                height={largeScreen ? 168 : 94}
                src={msLogo}
                alt="Microsoft for Startups Founder Hub Partnership logo"
              />
            </div>
          </div>
        </Card>
      </SimpleGrid>

    </div>
  );
};

export default Affiliation;
