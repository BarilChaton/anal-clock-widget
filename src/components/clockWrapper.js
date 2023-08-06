import React, { useEffect, useState } from 'react'
import { calculateStartColor, calculateEndColor, calculateGradientPosition } from '../utils/utils'

import HourHand from './hands/hourHand'
import MinuteHand from './hands/minuteHand'
import SecondHand from './hands/secondHand'

import Display from './timeDisplay/display'

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
          <Display />
          <HourHand {...{ time }}/>
          <MinuteHand {...{ time }}/>
          <SecondHand {...{ accumulatedSeconds }}/>
        <div className='dot'></div>
      </div>
    </div>
  )
}

export default ClockWrapper