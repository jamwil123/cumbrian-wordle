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
      
    }

    if (letter === "enter") {
      if(gridLetters[gridTurnCount][gridPossition] != ""){
        enterButton();
      }

      
    }
  }

  function enterButton() {
    if (gridTurnCount === 5 && gridPossition === 6) {
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
        alert('YOU WIN!');
      }

      // Time to check what letters match 
      let dictSearch = dictionary.map((word, mapIndex) => {
        if( word == str) {
         
          let userWord = str.split(''); // USER INPUTTED WORD SPLIT INTO ARRAY
          userWord.forEach((character, index1)=> {
          let wordArr = wordToGuess.split('')
          wordArr.forEach((strCharacter, index2)=>{
            
            if(strCharacter == character && index1 == index2 ){
              setClassNames((prev)=>{
                let classNamesUpdated = {...prev}
                
                  classNamesUpdated[`${strCharacter}`]["class"] = "keyboardLetters correct"
                  classNamesUpdated[`${strCharacter}`]['changed'] = true; 

                  classNamesUpdated[`${gridTurnCount}${index1}`]['class'] = 'squares correct'
                  classNamesUpdated[`${gridTurnCount}${index1}`]['changed'] = true
                  
                  
                  
                  return classNamesUpdated
              })
              
            
            }

            if(strCharacter == character && index1 !== index2){
              setClassNames((prev)=>{
                let classNamesUpdates = {...prev}

                  classNamesUpdates[`${gridTurnCount}${index1}`]['class'] = 'squares wrong-location'
                  classNamesUpdates[`${gridTurnCount}${index1}`]['changed'] = true
                

                // classNamesUpdates[`${gridTurnCount}${index1}`]['class'] = 'squares wrong-location'
                if(classNamesUpdates[strCharacter]['changed'] == false){
                  classNamesUpdates[`${strCharacter}`]["class"] = "keyboardLetters wrong-location"
                  classNamesUpdates[`${strCharacter}`]['changed'] = true; 
                }
                return classNamesUpdates
              })
            }


            if(strCharacter != character) {
            setClassNames((prev)=>{
              let classNamesUpdates = {...prev}

              if(classNamesUpdates[`${gridTurnCount}${index1}`]['changed'] === false ) {
                classNamesUpdates[`${gridTurnCount}${index1}`]['class'] = 'squares wrong'
                classNamesUpdates[`${gridTurnCount}${index1}`]['changed'] = true
              }

              if(classNamesUpdates[character]['changed'] == false){
                classNamesUpdates[`${character}`]["class"] = "keyboardLetters wrong";
                
              }
              return classNamesUpdates
            })
          }
          })
              
            })
            return 'done'
      }
      
    })
    let dictFilter = dictSearch.filter(x=> x == 'done')
    if(dictFilter.length <= 0){
        alert("This word isn't in our dictionary!");
      
    }
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
              disabled={haveWon}
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