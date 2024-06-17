import { QuestionFactory } from '@/features/questions/QuestionFactory'
import Button from '@/shared/ui/Button/Button'

import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { testData } from '@/shared/data/testData'
import { ProgressBar } from '@/features/questions/ProgressBar'
import { useAppDispatch, useAppSelector } from '@/app/appStore'
import { IQuestion } from '@/entities/questions/model/interfaces'
import { addAnswer } from '@/entities/answers/model/slice'
import { initializeQuestionsData } from '@/entities/questions/model/slice'

const QuestionsForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answerValue, setAnswerValue] = useState<string[]>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeQuestionsData(testData))
  }, [])

  const questionsData = useAppSelector((state) => state.questions.questionsData)

  const currentQuestion = questionsData?.questions[currentQuestionIndex]

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target
    const { value, type } = target

    if (type === 'radio') {
      setAnswerValue([event.target.value])
    } else if (type === 'checkbox') {
      const { checked } = event.target as HTMLInputElement
      if (checked) {
        setAnswerValue([...answerValue, value])
      } else {
        const filteredanswerValue = answerValue.filter((option) => option !== value)
        setAnswerValue(filteredanswerValue)
      }
    } else if (type === 'textarea') {
      setAnswerValue([value])
    }
  }

  const createAnswer = (currentQuestion: IQuestion, answerValue: string[]) => {
    const { id, type, questionText } = currentQuestion
    return {
      questionId: id,
      question: questionText,
      type,
      answer: answerValue
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1)
      const currentAnswer = createAnswer(currentQuestion, answerValue)
      dispatch(addAnswer(currentAnswer))
      setAnswerValue([])
    } else {
      console.error('Current question is undefined')
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={onFormSubmit}>
      {questionsData ? (
        <>
          <ProgressBar questions={questionsData.questions} currentQuestionIndex={currentQuestionIndex} />
          <span className={styles.questionText}>
            Вопрос: {questionsData.questions[currentQuestionIndex].questionText}
          </span>
          <QuestionFactory
            key={currentQuestionIndex}
            question={questionsData.questions[currentQuestionIndex]}
            handleChange={handleAnswerChange}
          />
          <Button label="Отправить" onButtonClick={handleNextQuestion} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </form>
  )
}

export default QuestionsForm
