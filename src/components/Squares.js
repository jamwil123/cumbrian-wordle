import squaresData from '../utils/squaresData.json'
import React, {useState, useEffect} from 'react'


export default function Squares({gridLetters, classNames, setClassNames}) {
  
  useEffect(() => {
    
  }, [setClassNames])
    
  return (
      <div className='main-square'>
      {gridLetters[0].map((data, i)=>{
        return (
            <div className ={classNames[`0${i}`]['class']}>{data}</div>
        )
      })}

      {gridLetters[1].map((data, i)=>{
        return (
            <div className ={classNames[`1${i}`]['class']}>{data[0]}</div>
        )
      })}

      {gridLetters[2].map((data, i)=>{
        return (
            <div className ={classNames[`2${i}`]['class']}>{data[0]}</div>
        )
      })}

      {gridLetters[3].map((data, i)=>{
        return (
            <div className ={classNames[`3${i}`]['class']}>{data[0]}</div>
        )
      })}

      {gridLetters[4].map((data, i)=>{
        return (
            <div className ={classNames[`4${i}`]['class']}>{data[0]}</div>
        )
      })}
      {gridLetters[5].map((data, i)=>{
        return (
            <div className ={classNames[`5${i}`]['class']}>{data[0]}</div>
        )
      })}
    </div>
  )
}
