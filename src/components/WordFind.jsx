
import { useEffect, useState } from 'react'
import { getWord } from '../utils/getWord';
import title from '../assets/Word Scramblle.svg'
import Tries from './Tries';

const WordFind = () => {

  const [word, setWord] = useState();

  useEffect(() => {
    fetchWord();
  }, [])

  const fetchWord = async () => {
    const data = await getWord();
    setWord(data[0])
  }

  return (
    <div className='flex flex-col justify-center items-center bg-c-dark p-5 rounded-lg w-1/2'>
      <div>
        <img className='h-3' src={title} alt='titulo' />
      </div>
      <div className='w-full bg-c-gray my-2 p-2 rounded-md text-center'>
        <p className='text-c-light-gray tracking-[5px] font-bold'>{word}</p>
      </div>
      <div>
        <Tries word={word} fetchWord={fetchWord}  setWord={setWord}/>
      </div>

    </div>
  )
}

export default WordFind;