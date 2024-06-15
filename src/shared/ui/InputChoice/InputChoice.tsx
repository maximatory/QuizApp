import styles from './styles.module.css'

export interface InputChoiceProps {
  type: 'checkbox' | 'radio'
  label: string
  handleInputChange: () => void
}

const InputChoice = ({ type, label, handleInputChange }: InputChoiceProps) => {
  return (
    <label className={styles.checkboxContainer}>
      <input type={type} onChange={handleInputChange} name="inputChoice" />
      <span className={styles.customCheckbox}></span>
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  )
}

export default InputChoice
