import React from 'react'

const MinuteHand = ({ currentDate }) => {
  const minutes = currentDate.getMinutes() + currentDate.getSeconds() / 60
  const minutesDeg = (minutes / 60) * 360
  console.log(minutesDeg);

  return (
    <div
      className='hand minute-hand'
      style={{ transform: `rotate(${minutesDeg}deg)` }}
      ></div>
  )
}

export default MinuteHand