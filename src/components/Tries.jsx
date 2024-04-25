import React, { useState } from 'react';
import ButtonComponent from "./common/ButtonComponent";
import InputComponent from "./common/InputComponent";
import useForm from '../hooks/useForm';

const Tries = ({ fetchWord, word, setWord }) => {
  const [mistakesCount, setMistakesCount] = useState(0);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [congrats, setCongrats] = useState(false);

  const { formState, onInputChange, onResetForm } = useForm({});

  if (!word || word.length === 0) {
    return null;
  }
 

  const inputComponents = [];
  for (let i = 0; i < word.length; i++) {
    const inputName = `letter${i}`;
    inputComponents.push(
      <div className='my-2 flex justify-center items-center' key={i}>
        <InputComponent
          type='text'
          name={inputName}
          value={formState[inputName] || ''}
          onChange={(e) => handleInputChange(e, inputName)}
        />
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
          const newWord = word.replace(userInput, '');
          setWord(newWord);
          if (newWord.length === 0) {
            setCongrats(true);
          }
        }
      } else {
        setIncorrectLetters(prevLetters => [...prevLetters, userInput]);
        if (mistakesCount + 1 === 6) {
          resetGame();
          alert('You have reached 6 tries. Game reset!');
        } else {
          setMistakesCount(prevCount => prevCount + 1);
        }
      }
    }
  };

  const resetGame = () => {
    setMistakesCount(0);
    setIncorrectLetters([]);
    setWord('');
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

      {congrats && <p className='text-c-pink text-3xl'>Congratulations! You guessed all the letters.</p>}

      <div className='my-2 flex justify-center items-center '>
        <ButtonComponent title='Random' onClick={fetchWord} />
        <ButtonComponent title='Reset' onClick={resetGame} />
      </div>
    </div>
  )
}

export default Tries;