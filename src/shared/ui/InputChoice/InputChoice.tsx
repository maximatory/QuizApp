import styles from './styles.module.css'

export interface InputChoiceProps {
  type: 'checkbox' | 'radio'
  label: string
  handleCheckboxChange: () => void
}

const InputChoice = ({ type, label, handleCheckboxChange }: InputChoiceProps) => {
  return (
    <label className={styles.checkboxContainer}>
      <input type={type} onChange={handleCheckboxChange} />
      <span className={styles.customCheckbox}></span>
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  )
}

export default InputChoice
