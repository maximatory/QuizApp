import styles from './styles.module.css'

interface TimerDisplayProps {
  minutes: string
  seconds: string
}

const TimerDisplay = ({ minutes, seconds }: TimerDisplayProps) => {
  return (
    <div className={styles.timerContainer}>
      {minutes} : {seconds}
    </div>
  )
}

export default TimerDisplay
