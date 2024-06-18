import Button from '@/shared/ui/Button/Button'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useAppDispatch } from '@/app/appStore'
import { resetAnswers } from '@/entities/answers/model/slice'

const WelcomePage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleStartTest = () => navigate('/test')

  useEffect(() => {
    window.localStorage.removeItem('currentQuestionIndex')
  }, [])

  useEffect(() => {
    dispatch(resetAnswers())
  }, [])

  return (
    <div className={styles.pageContainer}>
      <h1>Вам предлагается пройти тест</h1>
      <Button label="Начать тестирование" onButtonClick={handleStartTest} />
    </div>
  )
}

export default WelcomePage
