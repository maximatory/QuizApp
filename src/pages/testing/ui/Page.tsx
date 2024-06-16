import { QuestionsForm } from '@/widgets/QuestionsForm'
import styles from './styles.module.css'

const TestingPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Тестирование</h1>
      <QuestionsForm />
    </div>
  )
}

export default TestingPage
