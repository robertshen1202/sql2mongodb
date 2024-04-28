// pages/InputPage.js
import React, { useState } from 'react';

export default function InputPage() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleRunButtonClick = () => {
    // Here you can process the input text
    // For this example, let's just set the output to the input text
    setOutputText(inputText);
  };

  return (
    <div>
      <h1>Input Page</h1>
      <textarea
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text here"
        rows={14} // Set the number of rows for the multiline textbox
        cols={200}
      />
      <br />
      <button onClick={handleRunButtonClick}>Run</button>
      <br />
      <p>Output: {outputText}</p>


  
      <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>

    </div>
  );
}
