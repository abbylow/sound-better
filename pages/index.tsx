import { useState } from 'react';
import type { NextPage } from 'next';
import { ActionIcon, Loader, Title, TextInput, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons';

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px' }}>
      <div>
        <div>
          <Title mt={24} order={1} size={48}>Struggle with words at work?</Title>
        </div>
        <div>
          <Text fz="lg" mt={24}>Input your thoughts below, we will turn it to a professional message</Text>
        </div>
      </div>
      <form style={{ marginTop: '24px', width: '80%', display: 'flex', alignItems: 'center' }} onSubmit={callGenerateEndpoint}>
        <TextInput
          value={userInput}
          onChange={onUserChangedText}
          placeholder="Eg: I deserve a raise"
          size='md'
          radius='md'
          disabled={isGenerating}
          sx={{ flex: 1 }}
        />

        <ActionIcon variant="default" type="submit" disabled={isGenerating} size='lg' ml={8} radius='md' h={42} w={42}>
          <IconArrowRight size={24} />
        </ActionIcon>
      </form>

      {isGenerating && <Loader color="dark" variant="dots" mt={24} />}

      {apiOutput && (
        <div style={{ marginTop: '24px', padding: '20px', width: '80%', backgroundColor: '#fafafa', borderRadius: '8px', border: '1px solid #e1e1e1', textAlign: 'left' }}>
          {apiOutput}
        </div>
      )}
    </div>
  );
};

export default Home;
