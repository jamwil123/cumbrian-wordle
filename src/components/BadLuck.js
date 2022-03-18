import React from 'react'

export default function BadLuck() {
  return (
    <div className='winOrLoseText'>
    <div className='winOrLoseMessage'>Bad Luck!</div>
    <button className='resetButton' onClick={()=>{window.location.reload()}}>Reset?</button>
    </div>
  )
}
