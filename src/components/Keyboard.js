import React, { useState, useEffect} from "react";
import keyboard from "../utils/keyboard.json";
import dictionary from "../utils/dictionary.json";


export default function Keyboard({ gridLetters, setGridLetters, haveWon, setHaveWon, wordToGuess, setWordToGuess, classNames, setClassNames}) {
  const [selectedLetters, setSelectedLetters] = useState([]);

  // Which row of grid you are on 
  const [gridTurnCount, setGridTurnCount] = useState(0);
  // Which square is selected
  const [gridPossition, setGridPossition] = useState(0);

  
  
  


  //function to set our state for the letter selected by the user
  function clickedLetter(letter) {
    if (gridPossition >= 5) {
      return;
    } // checks to see if the position is more than or equal to 5 to prevent over-reach into empty array
    setGridLetters((prev) => {
      let arr = [...prev];
      arr[gridTurnCount][gridPossition] = `${letter}`;
      console.log(gridPossition, gridTurnCount);
      return arr; // return modified array with new letter in it
    });

    setGridPossition((prev) => {
      return prev + 1;
    }); // move to the next grid position
  }

  function delAndEnter(letter) {
    if (letter === "delete") {
      if (gridPossition === 0) {
        return;
      }
      setGridLetters((prev) => {
        let arr = [...prev];
        arr[gridTurnCount][gridPossition - 1] = "";
        return arr;
      });
      setGridPossition((prev) => {
        return prev - 1;
      });
      console.log(gridPossition, gridTurnCount);
    }

    if (letter === "enter") {
      if(gridLetters[gridTurnCount][gridPossition] != ""){
        enterButton();
      }

      
    }
  }

  function enterButton() {
    if (gridTurnCount === 5 && gridPossition === 6) {
      console.log('catch')
      return 0;
    } // checks to see if player is at the end of the grids. Stops users overfilling.

    // check to see if 5 words have been selected
    if (gridPossition >= 5) {
      let str = ""; // string of the user inputted WORD
      gridLetters[gridTurnCount].map((letter) => {
        str += letter;
      });

      // if the word == the word then the game is won. State is changed to won. 
      if (wordToGuess === str) {
        setHaveWon(true)
      }

      // Time to check what letters match 
      let dictSearch = dictionary.map((word) => {
        if( word == str) {
         
          let userWord = str.split(''); // USER INPUTTED WORD SPLIT INTO ARRAY
          userWord.forEach((character, index1)=> {
          let wordArr = wordToGuess.split('')
          wordArr.forEach((strCharacter, index2)=>{
            if(strCharacter == character && index1 == index2 ){
              setClassNames((prev)=>{
                  prev[`${strCharacter}`]["class"] = "keyboardLetters correct"
                  prev[`${strCharacter}`]['changed'] = true; 
                  prev[`${gridTurnCount}${index1}`]['class'] = 'squares correct'
                  
                  
                  return prev
              })
              
            
            }

            if(strCharacter == character && index1 != index2 ){
              setClassNames((prev)=>{
                prev[`${gridTurnCount}${index1}`]['class'] = 'squares wrong-location'
                if(prev[character]['changed'] == false){
                  prev[`${strCharacter}`]["class"] = "keyboardLetters wrong-location"
                  prev[`${strCharacter}`]['changed'] = true; 
                  return prev
                }
                return prev
              })
            }


            setClassNames((prev)=>{
              if(strCharacter != character)
              if(prev[character]['changed'] == false){
                prev[`${character}`]["class"] = "keyboardLetters wrong";
                prev[`${character}`]['changed'] = true; 
                prev[`${gridTurnCount}${index1}`]['class'] = 'squares wrong'
              return prev
              }
              return prev
            })
          })
              
            })
            return 'done'
      }
    })
    dictSearch.map((x)=>{
      if(x == 'done'){
        setGridTurnCount((prev) => prev + 1); // change grid to next one
        setGridPossition(0); // change square back to zero

      }
    })
    
    

    }
    return 0
  }

  return (
    <div className="keyboardMain">
      <div className="secondaryKeyboard">
        {keyboard[0].map((letter) => {
          return (
            <div
              className={`${classNames[`${letter}`]['class']}`}
              onClick={() => {
                clickedLetter(letter);
              }}
            >
              {letter}
            </div>
          );
        })}
      </div>

      <div className="secondaryKeyboard">
        {keyboard[1].map((letter) => {
          return (
            <div
              className={`${classNames[`${letter}`]['class']}`}
              onClick={() => {
                clickedLetter(letter);
              }}
            >
              {letter}{" "}
            </div>
          );
        })}
      </div>
      <div className="secondaryKeyboard">
        {keyboard[2].map((letter) => {
          if (letter.length > 1) {
            return (
              <div
                className={`${classNames[`${letter}`]}`}
                onClick={() => {
                  delAndEnter(letter);
                }}
              >
                {letter}
              </div>
            );
          }
          return (
            <div
              className={`${classNames[`${letter}`]['class']}`}
              onClick={() => {
                clickedLetter(letter);
              }}
            >
              {letter}
            </div>
          );
        })}
      </div>
    </div>
  );
}
