import React from 'react'

const HourHand = ({ time }) => {
  const hoursDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5

  return (
    <div 
      className='hand hour-hand'
      style={{ transform: `rotate(${hoursDeg}deg)` }}
      ></div>
  )
}

export default HourHand