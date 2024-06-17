import { useAppSelector } from '@/app/appStore'
import { TimerControl } from '@/features/timer/TimerControl'

import styles from './styles.module.css'

const QuestionsInfo = () => {
  const initialSeconds = useAppSelector((state) => state.questions.questionsData?.timerSeconds)
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.title}>Тестирование</h1>
      {initialSeconds && <TimerControl initialSeconds={initialSeconds} />}
    </div>
  )
}

export default QuestionsInfo
