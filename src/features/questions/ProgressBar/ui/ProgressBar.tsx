import { IQuestion, QuestionState } from '@/entities/questions/model/interfaces'
import styles from './styles.module.css'
import ProgressItem from '@/shared/ui/ProgressItem/ProgressItem'

export interface ProgressBarProps {
  questions: IQuestion[]
  currentQuestionIndex: number
}

const ProgressBar = ({ questions, currentQuestionIndex }: ProgressBarProps) => {
  const getQuestionState = (indexItem: number, currentQuestionIndex: number): QuestionState => {
    switch (true) {
      case indexItem < currentQuestionIndex:
        return QuestionState.Completed
      case indexItem === currentQuestionIndex:
        return QuestionState.Focus
      default:
        return QuestionState.Waiting
    }
  }

  return (
    <div className={styles.progressWrapper}>
      {questions?.map((question, index) => {
        const questionState = getQuestionState(index, currentQuestionIndex)
        return <ProgressItem key={question.id} state={questionState} />
      })}
    </div>
  )
}

export default ProgressBar
