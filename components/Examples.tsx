import { Card, Title, Text, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { exampleData, exampleSwitchInterval, IExample, randomize } from "../constants/example";

const useStyles = createStyles(() => ({
  wrapper: { marginTop: 96, marginBottom: 96 },
}));

const Examples: React.FC = () => {
  const { classes } = useStyles();

  const [example, setExample] = useState<IExample>(exampleData[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNum = randomize(exampleData.length);
      const newExample = exampleData[randomNum] || exampleData[0];
      setExample(newExample);
    }, exampleSwitchInterval);
    return () => clearInterval(interval);
  }, []);

  const largeScreen = useMediaQuery('(min-width: 992px)');

  return (
    <div className={classes.wrapper}>
      <Title weight={900} order={1} size={largeScreen ? 48 : 34} sx={() => ({ textShadow: '5px 5px 1px #a8ccf7' })}>
        Example Use Cases
      </Title>

      <Card shadow="sm" p="xl" radius="md" withBorder mt={'xl'}>
        <Text fw={700} fz="lg">
          {`If you are ${example?.scenario} Instead of saying`}
        </Text>
        <Text fw={700} fz="lg" mt={'xl'}>
          {`"${example?.input}"`}
        </Text>
        <Text fw={700} fz="lg" mt={'xl'}>
          Try to say this: 
        </Text>
        <Text fw={700} fz="lg" mt={'xl'}>
          {`"${example?.output}"`}
        </Text>
      </Card>
    </div>
  );
};

export default Examples;
