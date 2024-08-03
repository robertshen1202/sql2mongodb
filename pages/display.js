import React, { useState, useEffect } from 'react';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default function InputPage() {
  const [databaseInput, setDatabaseInputText] = useState('');
  const [collectionOutput, setCollectionInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleDatabaseInputChange = (event) => {
    setDatabaseInputText(event.target.value);
  };

  const handleCollectionInputChange = (event) => {
    setCollectionInputText(event.target.value);
  };

  const handleRunButtonClick = () => {
    // Here you can process the input text
    setOutputText(collectionOutput);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <h1>Display MongoDB Content</h1>
      Database: 
      <input
        type="Database"
        value={databaseInput}
        onChange={handleDatabaseInputChange}
        placeholder="Enter text here"
        rows={14} // Set the number of rows for the multiline textbox
        cols={200}
      />
      <br />
      Collection: 
      <input
        type="Collection"
        value={collectionOutput}
        onChange={handleCollectionInputChange}
        placeholder="Enter text here"
        rows={14} // Set the number of rows for the multiline textbox
        cols={200}
      />
      <br />
      <button onClick={handleRunButtonClick}>Run</button>
      <br />

      <h2>Data List</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>


  
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
