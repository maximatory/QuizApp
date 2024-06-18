import { useAppSelector } from '@/app/appStore'
import { TimerControl } from '@/features/timer/TimerControl'

import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

const QuestionsInfo = () => {
  const navigate = useNavigate()
  const initialSeconds = useAppSelector((state) => state.questions.questionsData?.timerSeconds)
  const handleTimerEnd = () => navigate('/fynally')
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.title}>Тестирование</h1>
      {initialSeconds && <TimerControl initialSeconds={initialSeconds} onTimerEnd={handleTimerEnd} />}
    </div>
  )
}

export default QuestionsInfo
