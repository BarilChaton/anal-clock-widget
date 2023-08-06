import React, { useEffect, useState } from 'react'
import { calculateStartColor, calculateEndColor, calculateGradientPosition } from '../utils/utils'

import HourHand from './hands/hourHand'
import MinuteHand from './hands/minuteHand'
import SecondHand from './hands/secondHand'

import Display from './timeDisplay/display'

const ClockWrapper = () => {
  const [ currentDate, setCurrentDate ] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const sysHours = currentDate.getHours()
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
          <HourHand {...{ currentDate }}/>
          <MinuteHand {...{ currentDate }}/>
          <SecondHand {...{ currentDate }}/>
        <div className='dot'></div>
      </div>
    </div>
  )
}

export default ClockWrapper