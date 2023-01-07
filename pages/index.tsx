import { useState } from 'react';
import type { NextPage } from 'next';
import { ActionIcon, Loader, Title, TextInput, Text, createStyles, CopyButton, Tooltip, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowRight, IconCheck, IconCopy, IconX } from '@tabler/icons';

const useStyles = createStyles(() => ({
  form: { marginTop: '24px', width: '80%', display: 'flex', alignItems: 'center' },
  outputWrapper: {
    marginTop: '24px',
    padding: '20px',
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    border: '1px solid #CED4DA',
    display: 'flex',
    alignItems: 'center'
  }
}));

const Home: NextPage = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [apiOutput, setApiOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const callGenerateEndpoint = async (event) => {
    event.preventDefault();

    if (!(userInput?.trim())) {
      console.log('Given invalid user input')
      return;
    }

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

  const reset = () => {
    setUserInput('');
    setApiOutput('');
  }

  const largeScreen = useMediaQuery('(min-width: 992px)');

  const { classes } = useStyles();

  return (
    <Container mt={95} p={24} display={'flex'} ta={'center'} sx={{ flexDirection: 'column', alignItems: 'center' }}>
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
          rightSection={
            <ActionIcon variant='transparent' onClick={reset} disabled={isGenerating}>
              <IconX size={22} />
            </ActionIcon>
          }
        />

        <ActionIcon variant="default" type="submit" disabled={isGenerating} size='lg' ml={8} radius='md' h={42} w={42}>
          <IconArrowRight size={24} />
        </ActionIcon>
      </form>

      {isGenerating && <Loader color="dark" variant="dots" mt={24} />}

      {apiOutput && (
        <div className={classes.outputWrapper}>
          <Text fw={700} ta={'left'} sx={{ flex: 1 }}>
            {apiOutput}
          </Text>
          <CopyButton value={apiOutput} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="top">
                <ActionIcon color={copied ? 'teal' : 'dark'} onClick={copy} variant="transparent" size='lg' ml={8} radius='md' h={42} w={42}>
                  {copied ? <IconCheck size={24} /> : <IconCopy size={24} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </div>
      )}
    </Container>
  );
};

export default Home;
