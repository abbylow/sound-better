import { useState } from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [apiOutput, setApiOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const callGenerateEndpoint = async () => {
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
      <div>
        <div>
          <div>
            <h1>Struggle with words at work?</h1>
          </div>
          <div>
            <h2>Input your thoughts below, we will turn it to a professional message</h2>
          </div>
        </div>
        <div>
          <textarea
            placeholder="Eg: I deserve a raise"
            value={userInput}
            onChange={onUserChangedText}
          />
        </div>
        <div>
          <a
            onClick={callGenerateEndpoint}
          >
            <div>
              {isGenerating ? <span></span> : <p>Convert</p>}
            </div>
          </a>
        </div>
        {apiOutput && (
          <div>
            <div>
              <div>
                <h3>Output:</h3>
              </div>
            </div>
            <div>
              <p>{apiOutput}</p>
            </div>
          </div>
        )}
      </div>
  );
};

export default Home;
