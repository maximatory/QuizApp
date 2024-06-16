import InputChoice from '../InputChoice/InputChoice'
import styles from './styles.module.css'

export interface GroupChoiceProps {
  type: string
  options?: string[]
  handleInputChange: () => void
}

const GroupChoice = ({ type, options, handleInputChange }: GroupChoiceProps) => {
  const choiceType = type === 'SingleChoice' ? 'radio' : 'checkbox'
  return (
    <div className={styles.groupContainer}>
      <span className={styles.description}>
        {choiceType === 'radio' ? 'Выберите один вариант' : 'Ответ может содержать несколько вариантов'}
      </span>
      {options &&
        options.map((option, index) => {
          return <InputChoice key={index} type={choiceType} label={option} handleInputChange={handleInputChange} />
        })}
    </div>
  )
}

export default GroupChoice
