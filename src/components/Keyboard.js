import React, { useState } from "react";
import keyboard from "../utils/keyboard.json";

export default function Keyboard({ gridLetters, setGridLetters }) {
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
      if(gridPossition === 0){
        return
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
      enterButton()
    }

    function enterButton() {
      if (gridTurnCount === 5) {
        return 0;
      }
      setGridTurnCount((prev) => prev + 1);
      setGridPossition(0);
      console.log(gridPossition, gridTurnCount);

    }
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
          return <div className="keyboardLetters">{letter}</div>;
        })}
      </div>
    </div>
  );
}
