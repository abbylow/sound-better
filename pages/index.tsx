import { SetStateAction, useState } from 'react';
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
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Struggle with words at work?</h1>
          </div>
          <div className="header-subtitle">
            <h2>Input your thoughts below, we will turn it to a professional message</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea
            className="prompt-box"
            placeholder="Eg: I deserve a raise"
            value={userInput}
            onChange={onUserChangedText}
          />;
        </div>
        <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Convert</p>}
            </div>
          </a>
        </div>
        {apiOutput && (
          <div className="output">
            <div className="output-header-container">
              <div className="output-header">
                <h3>Output:</h3>
              </div>
            </div>
            <div className="output-content">
              <p>{apiOutput}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
