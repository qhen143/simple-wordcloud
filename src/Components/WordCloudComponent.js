import React, { useState } from 'react';
import ReactWordcloud from 'react-wordcloud';

const WordCloudComponent = () => {
  const [words, setWords] = useState([
    { text: 'React', value: 20 },
    { text: 'JavaScript', value: 25 },
    { text: 'Web', value: 18 },
    // Initial words
  ]);

  const [newWord, setNewWord] = useState('');

  const handleInputChange = (e) => {
    setNewWord(e.target.value);
  };

  const addWord = () => {
    if (newWord.trim() !== '') {
      const updatedWords = [...words, { text: newWord, value: 15 }];
      setWords(updatedWords);
      setNewWord('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addWord();
    }
  };

  const options = {
    rotations: 0,
    rotationAngles: [0, 0],
    fontSizes: [20, 50],
    fontFamily: 'Segoe UI'
  };

  return (
    <div>
      <div style={{ width: '500px', height: '400px' }}>
        <ReactWordcloud words={words} options={options} />
      </div>
      <div>
        <input
          type="text"
          value={newWord}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter a word!"
        />
        <button onClick={addWord}>Add Word</button>
      </div>
    </div>
  );
};

export default WordCloudComponent;
