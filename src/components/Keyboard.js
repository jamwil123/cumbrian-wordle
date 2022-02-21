import React from 'react'
import keyboard from "../utils/keyboard.json"

export default function Keyboard() {
  return (
    <div className = 'keyboardMain'>
    <div className='secondaryKeyboard'>
    {keyboard[0].map((letter)=>{
        return (<div className = "keyboardLetters">
                {letter}            
            </div>)
    })}
    </div>

    <div className='secondaryKeyboard' >

    {keyboard[1].map((letter)=>{
        return (<div className = "keyboardLetters">
                {letter}            
            </div>)
    })}

    </div>
    <div className='secondaryKeyboard'>

    {keyboard[2].map((letter)=>{
        if(letter.length > 1){
            return (<div className = 'largeKeyboardLetters'>
                    {letter}                
                </div>)
        }
        return (<div className = "keyboardLetters">
                {letter}            
            </div>)
    })}

    </div>
    
    </div>
  )
}
