import { useState } from 'react';
import type { NextPage } from 'next';
import { ActionIcon, Loader, Title, TextInput, Text, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowRight } from '@tabler/icons';

const useStyles = createStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '24px',
    marginTop: '24px'
  },
  form: { marginTop: '24px', width: '80%', display: 'flex', alignItems: 'center' },
}));

const Home: NextPage = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [apiOutput, setApiOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const callGenerateEndpoint = async (event) => {
    event.preventDefault();
    window.plausible("Convert");

    setIsGenerating(true);
    setApiOutput('');

    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput: userInput?.trim() }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(output.text);
    setIsGenerating(false);
  }

  const onUserChangedText = (event: { target: { value: string } }) => {
    setUserInput(event.target.value);
  };

  const largeScreen = useMediaQuery('(min-width: 992px)');

  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Title weight={900} mt={24} order={1} size={largeScreen ? 48 : 32} sx={(theme) => ({
        '@media (max-width: 755px)': {
          padding: theme.spacing.sm,
        },
      })}>
        Struggle with words at work?
      </Title>
      <Text fw={700} fz="lg" mt={24}>Input your thoughts below, we will turn it to a professional message</Text>

      <form className={classes.form} onSubmit={callGenerateEndpoint}>
        <TextInput
          value={userInput}
          onChange={onUserChangedText}
          placeholder="Eg: I deserve a raise"
          size='md'
          radius='md'
          disabled={isGenerating}
          sx={{ flex: 1, input: { fontWeight: 700 } }}
        />

        <ActionIcon variant="default" type="submit" disabled={isGenerating} size='lg' ml={8} radius='md' h={42} w={42}>
          <IconArrowRight size={24} />
        </ActionIcon>
      </form>

      {isGenerating && <Loader color="dark" variant="dots" mt={24} />}

      {apiOutput && (
        <Text fw={700} mt={24} p={20} w={'80%'} bg={'#fafafa'} ta={'left'} sx={{ borderRadius: '8px', border: '1px solid #e1e1e1' }}>
          {apiOutput}
        </Text>
      )}
    </div>
  );
};

export default Home;
