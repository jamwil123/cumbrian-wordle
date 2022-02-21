import React from 'react'
import Squares from './Squares.js'
import Keyboard from './Keyboard.js'

export default function Home() {
  return (
    <div className='mainHome'>
    <div className='title'>BAD WORDS ONLY WORDLE</div>
    <Squares/>

    <Keyboard/>

    </div>
  )
}
