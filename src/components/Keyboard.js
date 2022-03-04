import React, { useState } from "react";
import keyboard from "../utils/keyboard.json";
import dictionary from "../utils/dictionary.json";

export default function Keyboard({ gridLetters, setGridLetters, haveWon, setHaveWon, wordToGuess, setWordToGuess}) {
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
      enterButton();
    }
  }

  function enterButton() {
    if (gridTurnCount === 5 || gridPossition === 0) {
      return 0;
    } // checks to see if player is at the end of the grids. Stops users overfilling.

    // check to see if 5 words have been selected
    if (gridPossition >= 5) {
      let str = "";
      gridLetters[gridTurnCount].map((letter) => {
        str += letter;
      });

      if (wordToGuess === str) {
        setHaveWon(true)
      }

      dictionary.map((word) => {
        

        if(word !== str) 
        {
          
        }
      })


    }

    setGridTurnCount((prev) => prev + 1); // change grid to next one
    setGridPossition(0); // change square back to zero
  }

  return (
    <div className="keyboardMain">
      <div className="secondaryKeyboard">
        {keyboard[0].map((letter) => {
          return (
            <div
              className="keyboardLetters"
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
              className="keyboardLetters"
              onClick={() => {
                clickedLetter(letter);
                console.log(this.className)
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
                className="largeKeyboardLetters"
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
              className="keyboardLetters"
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
