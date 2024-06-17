import styles from './styles.module.css'

export interface InputChoiceProps {
  type: 'checkbox' | 'radio'
  label: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputChoice = ({ type, label, handleInputChange }: InputChoiceProps) => {
  return (
    <label className={styles.checkboxContainer}>
      <input type={type} value={label} onChange={handleInputChange} name="inputChoice" />
      <span className={styles.customCheckbox}></span>
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  )
}

export default InputChoice
