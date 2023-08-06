import React from 'react'

const SecondHand = ({ accumulatedSeconds }) => {
  const secondsDeg = (accumulatedSeconds / 60) * 360

  return (
    <div
      className='hand second-hand'
      style={{ transform: `rotate(${secondsDeg}deg)` }}
      ></div>
  )
}

export default SecondHand