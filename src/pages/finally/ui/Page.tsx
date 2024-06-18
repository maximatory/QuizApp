import Button from '@/shared/ui/Button/Button'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

const FinallyPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.localStorage.removeItem('timerStartTime')
    window.localStorage.setItem('timerIsActive', JSON.stringify(false))
  }, [])

  const handleResetTest = () => {
    navigate('/')
  }

  return (
    <div className={styles.pageContainer}>
      <h1>Тест завершен</h1>
      <Button label="Вернуться в начало" onButtonClick={handleResetTest}></Button>
    </div>
  )
}

export default FinallyPage
