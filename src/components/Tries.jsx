import React from 'react';
import ButtonComponent from "./common/ButtonComponent";
import InputComponent from "./common/InputComponent";
import { getWord } from '../utils/getWord';
import useForm from '../hooks/useForm';

const Tries = ({ fetchWord, word }) => {

  const { formState, onInputChange, onResetForm  } = useForm({});

  if (!word || word.length === 0) {
    return null;
  }

  const inputComponents = [];
  for (let i = 0; i < word.length; i++) {
    const inputName = `letter${i}`;
    inputComponents.push(
      <div className='my-2 flex justify-center items-center' key={i}>
        <InputComponent type='text' name={inputName} value={formState[inputName] || ''} onChange={onInputChange} />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">

      <div className="flex justify-around items-center w-full my-2">

        <div>
          <p className="text-c-light-gray">Tries:</p>
        </div>
        <div>
          <p className="text-c-light-gray">Mistakes:</p>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap'>
        {inputComponents}

      </div>

      <div className='my-2 flex justify-center items-center '>
        <ButtonComponent title='Random' onClick={fetchWord} />
        <ButtonComponent title='Reset' onClick={onResetForm} />
      </div>
    </div>
  )
}

export default Tries;