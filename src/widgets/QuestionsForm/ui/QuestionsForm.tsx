import { QuestionFactory } from '@/features/questions/QuestionFactory'
import Button from '@/shared/ui/Button/Button'

import { useState } from 'react'
import styles from './styles.module.css'
import { testData } from '@/shared/data/testData'
import { ProgressBar } from '@/features/questions/ProgressBar'

const QuestionsForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const { questions } = testData
  const handleChange = () => console.log('change')
  const currentQuestion = questions[currentQuestionIndex]
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setCurrentQuestionIndex((prev) => prev + 1)
  }
  return (
    <form className={styles.formContainer}>
      <ProgressBar questions={questions} currentQuestionIndex={currentQuestionIndex} />
      <span className={styles.questionText}>Вопрос: {currentQuestion.questionText}</span>
      <QuestionFactory key={currentQuestionIndex} question={currentQuestion} handleChange={handleChange} />
      <Button label="Отправить" onButtonClick={handleButtonClick} />
    </form>
  )
}

export default QuestionsForm
