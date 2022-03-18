import React from 'react'

export default function YouWin() {
  return (
    <div className='winOrLoseText'>
    <div className='winOrLoseMessage'>You Win!</div>
    <button className='resetButton' onClick={()=>{window.location.reload()}}>Reset?</button>
    </div>
  )
}
