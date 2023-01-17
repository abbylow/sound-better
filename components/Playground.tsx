import { useState } from 'react';
import { ActionIcon, Loader, Title, TextInput, Text, createStyles, CopyButton, Tooltip, Space, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconCheck, IconClipboard, IconX } from '@tabler/icons';

const useStyles = createStyles((classes) => ({
  outputWrapper: {
    padding: '20px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    border: '1px solid #CED4DA',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorWrapper: {
    padding: '20px',
    backgroundColor: classes.colors.red[1],
    borderRadius: '8px',
    border: `1px solid ${classes.colors.red[2]}`,
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    minHeight: '71vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
}));

const Playground: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [apiOutput, setApiOutput] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
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
    setError(false);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: userInput?.trim() }),
      });

      const data = await response.json();
      const { output } = data;
      setApiOutput(output.text?.trim());
    } catch (err) {
      console.error('Fail to generate output ', err.message);
      window.plausible("API_Error");
      setError(true);
    }

    setIsGenerating(false);
  }

  const onUserChangedText = (event: { target: { value: string } }) => {
    setUserInput(event.target.value);
  };

  const reset = () => {
    setUserInput('');
    setApiOutput('');
    setError(false);
  }

  const largeScreen = useMediaQuery('(min-width: 992px)');

  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Title weight={900} order={1} size={largeScreen ? 48 : 34} sx={(theme) => ({
        '@media (max-width: 755px)': {
          padding: theme.spacing.sm,
        },
        textShadow: '5px 5px 1px #a8ccf7'
      })}>
        Make your communication sound better
      </Title>
      <Text fw={700} fz="xl" mt={'xl'}>
        Polish your thoughts into professional language for workplace communication. For free.
      </Text>

      <Space h="xl" />
      <form style={{ width: largeScreen ? '80%' : '100%' }} onSubmit={callGenerateEndpoint}>
        <TextInput
          value={userInput}
          onChange={onUserChangedText}
          placeholder="Eg: I deserve a raise"
          size='md'
          radius='md'
          disabled={isGenerating}
          sx={{ flex: 1, input: { fontWeight: 700 } }}
          rightSection={
            userInput?.trim() && (<ActionIcon variant='transparent' onClick={reset} disabled={isGenerating}>
              <IconX size={22} />
            </ActionIcon>)
          }
        />

        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          size="lg"
          radius='md'
          mt="lg"
          type="submit"
          disabled={isGenerating}
        >
          Polish now
        </Button>
      </form>

      {isGenerating && <Loader color="dark" variant="dots" mt={'xl'} />}

      {apiOutput && (
        <>
          <Space h="xl" />
          <div className={classes.outputWrapper} style={{ width: largeScreen ? '80%' : '100%' }}>
            <Text fw={700} sx={{ flex: 1 }}>
              {apiOutput}
            </Text>
            <CopyButton value={apiOutput} timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="top">
                  <ActionIcon color={copied ? 'teal' : 'dark'} onClick={copy} variant="transparent" size='lg' radius='md' h={42} w={42}>
                    {copied ? <IconCheck size={24} /> : <IconClipboard size={24} />}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </div>
        </>
      )}

      {error && (
        <>
          <Space h="xl" />
          <div className={classes.errorWrapper} style={{ width: largeScreen ? '80%' : '100%' }}>
            <Text fw={700} ta={'left'} sx={{ flex: 1 }}>
              {"Something went wrong, please try again :( "}
            </Text>
          </div>
        </>
      )}

    </div>
  );
};

export default Playground;
