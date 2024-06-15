import styles from './styles.module.css'

export interface InputTextProps {
  type: string
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const InputText = ({ type, handleChange }: InputTextProps) => {
  const isSmall = type === 'ShortText'
  const placeholderValue = isSmall ? 'Ответьте коротко' : 'Дайте развернутый ответ'
  return (
    <textarea
      rows={isSmall ? 3 : 10}
      placeholder={placeholderValue}
      onChange={handleChange}
      className={styles.textarea}></textarea>
  )
}

export default InputText
