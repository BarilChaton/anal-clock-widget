import React, { useEffect, useState } from 'react'
import { calculateStartColor, calculateEndColor, calculateGradientPosition } from '../utils/utils'

const ClockWrapper = () => {
  const [ time, setTime ] = useState(new Date())
  const [accumulatedSeconds, setAccumulatedSeconds] = useState(time.getSeconds() + time.getMilliseconds() / 1000)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const newAccumulatedSeconds = accumulatedSeconds + 1
      setAccumulatedSeconds(newAccumulatedSeconds)
    }, 1000)

    return () => {
      clearInterval(interval)
    };
  }, [accumulatedSeconds])

  // Kalkulacja zeby wskaznik pokazywal prawidlowy czas
  const hoursDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5
  const minutesDeg = time.getMinutes() * 6
  const secondsDeg = (accumulatedSeconds / 60) * 360

  //console.log(totalSeconds);

  // Dla kalkulacji czasu i animowania tla.
  const sysHours = time.getHours()
  const gradientXPosition = calculateGradientPosition(sysHours)
  const startColor = calculateStartColor(sysHours)
  const endColor = calculateEndColor(sysHours)

  return (
    <div className='widget-container'>
      <div className='clock-face'
        style={{ 
          '--gradient-x-position': `${gradientXPosition}%`,
          '--start-color': startColor, 
          '--end-color': endColor }}
        >
        <div 
          className='hand hour-hand'
          style={{ transform: `rotate(${hoursDeg}deg)` }}
          ></div>
          <div
            className='hand minute-hand'
            style={{ transform: `rotate(${minutesDeg}deg)` }}
            ></div>
          <div
            className='hand second-hand'
            style={{ transform: `rotate(${secondsDeg}deg)` }}
          ></div>
          <div className='dot'></div>
      </div>
    </div>
  )
}

export default ClockWrapper