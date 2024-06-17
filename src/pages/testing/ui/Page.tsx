import { useEffect } from 'react'
import { initializeQuestionsData } from '@/entities/questions/model/slice'
import { testData } from '@/shared/data/testData'
import { QuestionsForm } from '@/widgets/QuestionsForm'
import { QuestionsInfo } from '@/widgets/QuestionsInfo'
import { useAppDispatch } from '@/app/appStore'

import styles from './styles.module.css'

const TestingPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(initializeQuestionsData(testData))
  }, [testData])

  return (
    <div className={styles.pageContainer}>
      <QuestionsInfo />
      <QuestionsForm />
    </div>
  )
}

export default TestingPage
