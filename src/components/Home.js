import React, { useState, useEffect} from "react";
import Squares from './Squares.js'
import Keyboard from './Keyboard.js'
import squaresData from '../utils/squaresData.json'

export default function Home() {

  const [gridLetters, setGridLetters ] = useState(squaresData);
  

  return (
    <div className='mainHome'>
    <div className='title'>BAD WORDS ONLY WORDLE</div>
    <Squares gridLetters={gridLetters} />

    <Keyboard gridLetters={gridLetters} setGridLetters={setGridLetters}/>

    </div>
  )
}
