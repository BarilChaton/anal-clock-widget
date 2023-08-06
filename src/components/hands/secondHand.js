import React from 'react'

const SecondHand = ({ currentDate }) => {
  const seconds = currentDate.getSeconds() + currentDate.getMilliseconds() / 1000
  const secondsDeg = (seconds / 60) * 360

  return (
    <div
      className='hand second-hand'
      style={{ transform: `rotate(${secondsDeg}deg)` }}
      ></div>
  )
}

export default SecondHand