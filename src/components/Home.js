import React, { useState, useEffect} from "react";
import Squares from './Squares.js'
import Keyboard from './Keyboard.js'
import squaresData from '../utils/squaresData.json'
import classNamesObj from "../utils/classNames.json"
import YouWin from "./YouWin.js";
import BadLuck from "./BadLuck.js";
import { randomWordSelector } from "../utils/functions/randomWordSelector.js";

export default function Home() {
  // State that changes the grids values 
  const [gridLetters, setGridLetters ] = useState(squaresData);
  // State if player has won or not
  const [haveWon, setHaveWon] = useState(false);
  // State that holds the word of the day 
  const [wordToGuess, setWordToGuess] = useState('word');
  // classname state
  const [classNames, setClassNames] = useState(classNamesObj);

  const [maxGuesses, setMaxGuesses] = useState(false)

  useEffect(() => {
    if(wordToGuess === 'word'){
      setWordToGuess(randomWordSelector())
    }
    console.log(haveWon)
  }, [haveWon, wordToGuess])
  
  return (
    <div className='mainHome'>
    <div className='title'>Cumbrian Wordle</div>
    {haveWon ? <YouWin/> : <div></div> }
    {maxGuesses ? <BadLuck/> : <div></div>}
    <Squares gridLetters={gridLetters} classNames={classNames} setClassNames={setClassNames} />

    <Keyboard classNames={classNames} setClassNames={setClassNames} gridLetters={gridLetters} setGridLetters={setGridLetters} haveWon={haveWon} setHaveWon={setHaveWon} wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} maxGuesses={maxGuesses} setMaxGuesses={setMaxGuesses}/>

    </div>
  )
}
