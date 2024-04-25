import React, { useState } from 'react';
import ButtonComponent from "./common/ButtonComponent";
import InputComponent from "./common/InputComponent";
import useForm from '../hooks/useForm';

const Tries = ({ fetchWord, word }) => {
  const [mistakesCount, setMistakesCount] = useState(0);
  const [incorrectLetters, setIncorrectLetters] = useState([]);

  const { formState, onInputChange, onResetForm } = useForm({});

  if (!word || word.length === 0) {
    return null;
  }

  const inputComponents = [];
  for (let i = 0; i < word.length; i++) {
    const inputName = `letter${i}`;
    inputComponents.push(
      <div className='my-2 flex justify-center items-center' key={i}>
        <InputComponent type='text' name={inputName} value={formState[inputName] || ''} onChange={(e) => handleInputChange(e, inputName)} />
      </div>
    );
  }

  const handleInputChange = (event, inputName) => {
    const userInput = event.target.value.toLowerCase();
    const correctLetter = word[inputName.substr(6)];

    if (userInput.length === 1) {
      if (word.includes(userInput)) {
        onInputChange({ target: { name: inputName, value: userInput } });
        if (userInput === correctLetter) {
          setWord(prevWord => prevWord.replace(userInput, ''));
        }
      } else {
        setIncorrectLetters(prevLetters => [...prevLetters, userInput]);
        if (mistakesCount + 1 === 5) {
          resetGame();
        } else {
          setMistakesCount(prevCount => prevCount + 1);
        }
      }
    }
  };

  const resetGame = () => {
    setMistakesCount(0);
    setIncorrectLetters([]);
    onResetForm();
  };

  return (
    <div className="flex flex-col w-full">

      <div className="flex justify-around items-center w-full my-2">

        <div>
          <p className="text-c-light-gray">Tries (5) : {mistakesCount}</p>
        </div>
        <div>
          <p className="text-c-light-gray">Mistakes: {incorrectLetters.join(', ')}</p>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap'>
        {inputComponents}

      </div>

      <div className='my-2 flex justify-center items-center '>
        <ButtonComponent title='Random' onClick={fetchWord} />
        <ButtonComponent title='Reset' onClick={resetGame} />
      </div>
    </div>
  )
}

export default Tries;