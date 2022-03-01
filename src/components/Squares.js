import squaresData from '../utils/squaresData.json'
import React, {useState} from 'react'



export default function Squares({gridLetters}) {
  
    

  return (
      <div className='main-square'>
      {gridLetters[0].map((data)=>{
        return (
            <div className ='squares'>{data}</div>
        )
      })}

      {gridLetters[1].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}

      {gridLetters[2].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}

      {gridLetters[3].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}

      {gridLetters[4].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}
      {gridLetters[5].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}
    </div>
  )
}
