import React, { useEffect, useState } from 'react'

const Display = () => {
  const [ time, setTime ] = useState(new Date())
  const [ timeDisplay, setTimeDisplay ] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const formattedTime = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(time)

    setTimeDisplay(formattedTime)
  }, [ time ])

  return (
    <div className='display-container'>
      <div className='digits'>{timeDisplay}</div>
    </div>
  )
}

export default Display