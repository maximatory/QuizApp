import { useEffect, useState } from 'react'
import TimerDisplay from '@/shared/ui/TimerDisplay/TimerDisplay'
import useLocalStorage from '@/shared/lib/hooks/useLocalStorage'
import formatTimeValue from '@/shared/lib/helpers/formatTimeValue'

interface TimerControlProps {
  initialSeconds: number
  onTimerEnd: () => void
}

const TimerControl = ({ initialSeconds, onTimerEnd }: TimerControlProps) => {
  const [startTime, setStartTime] = useLocalStorage('timerStartTime', Date.now())
  const [isActive, setIsActive] = useLocalStorage('timerIsActive', true)
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds)

  useEffect(() => {
    // Запускаем таймер только если он ранее был активен
    if (isActive) {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000)
      const updatedSecondsLeft = Math.max(initialSeconds - elapsedSeconds, 0)
      setSecondsLeft(updatedSecondsLeft)

      if (updatedSecondsLeft === 0) {
        setIsActive(false)
      }
    }
  }, [])

  useEffect(() => {
    if (!isActive) {
      return
    }

    const interval = setInterval(() => {
      setSecondsLeft((prevSecondsLeft) => {
        const newSecondsLeft = prevSecondsLeft - 1
        if (newSecondsLeft <= 0) {
          clearInterval(interval)
          setIsActive(false)
          alert('Время вышло!')
          setTimeout(onTimerEnd, 0)
          return 0
        }
        return newSecondsLeft
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  // Автоматический запуск таймера
  useEffect(() => {
    if (secondsLeft <= 0) {
      setIsActive(false)
    } else {
      setIsActive(true)
      setStartTime(Date.now() - (initialSeconds - secondsLeft) * 1000)
    }
  }, [secondsLeft])

  const minutes = String(Math.floor(secondsLeft / 60))
  const seconds = String(secondsLeft % 60)

  return (
    <div>
      <TimerDisplay minutes={formatTimeValue(minutes)} seconds={formatTimeValue(seconds)} />
    </div>
  )
}

export default TimerControl
