import React from 'react'

const MinuteHand = ({ time }) => {
  const minutesDeg = time.getMinutes() * 6

  return (
    <div
      className='hand minute-hand'
      style={{ transform: `rotate(${minutesDeg}deg)` }}
      ></div>
  )
}

export default MinuteHand