import { QuestionState } from '@/entities/questions/model/interfaces'
import styles from './styles.module.css'

export interface ProgressItemProps {
  state: QuestionState
}

const ProgressItem = ({ state }: ProgressItemProps) => {
  return <div className={`${styles.progressItem} ${styles[`progressItem_${state}`]}`}></div>
}

export default ProgressItem
