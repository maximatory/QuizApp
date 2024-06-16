import styles from './styles.module.css'

export interface InputTextProps {
  type: string
  handleTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const InputText = ({ type, handleTextChange }: InputTextProps) => {
  const isSmall = type === 'ShortText'
  const placeholderValue = isSmall ? 'Ответьте коротко' : 'Дайте развернутый ответ'
  return (
    <textarea
      rows={isSmall ? 3 : 10}
      placeholder={placeholderValue}
      onChange={handleTextChange}
      className={styles.textarea}></textarea>
  )
}

export default InputText
