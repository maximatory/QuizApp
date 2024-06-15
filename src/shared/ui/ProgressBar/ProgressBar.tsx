import { IQuestion } from '@/entities/questions/model/interfaces'
import styles from './styles.module.css'
import ProgressItem from '../ProgressItem/ProgressItem'

export interface ProgressBarProps {
  questions: IQuestion[]
}

const ProgressBar = ({ questions }: ProgressBarProps) => {
  return (
    <div className={styles.progressWrapper}>
      {questions?.map((question) => (
        <ProgressItem key={question.id} state={question.state} />
      ))}
    </div>
  )
}

export default ProgressBar
