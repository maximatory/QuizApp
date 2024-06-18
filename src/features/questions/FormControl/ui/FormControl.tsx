import Button from '@/shared/ui/Button/Button'
import styles from './styles.module.css'

export interface FormControlProps {
  onButtonClick: () => void
  errorMessage: string
}

const FormControl = ({ onButtonClick, errorMessage }: FormControlProps) => {
  return (
    <div className={styles.controlContainer}>
      <Button label="Отправить" onButtonClick={onButtonClick} />
      {errorMessage && <span className={styles.errorValidate}>{errorMessage}</span>}
    </div>
  )
}

export default FormControl
