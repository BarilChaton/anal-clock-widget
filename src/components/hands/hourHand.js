import React from 'react'

const HourHand = ({ currentDate }) => {
  const hours = currentDate.getHours() + currentDate.getMinutes() / 60
  const hoursDeg = (hours / 12) * 360

  return (
    <div 
      className='hand hour-hand'
      style={{ transform: `rotate(${hoursDeg}deg)` }}
      ></div>
  )
}

export default HourHand