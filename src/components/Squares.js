import squaresData from '../utils/squaresData.json'
import React from 'react'


export default function Squares() {
  return (
      <div className='main-square'>
      {squaresData[0].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}

      {squaresData[1].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}

      {squaresData[2].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}

      {squaresData[3].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}

      {squaresData[4].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}
      {squaresData[5].map((data)=>{
        return (
            <div className ='squares'>{data[0]}</div>
        )
      })}
    </div>
  )
}
