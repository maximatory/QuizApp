import { QuestionType } from '../../questions/model/interfaces'

export interface IAnswer {
  questionId: string
  question: string
  type: QuestionType
  answer: string[]
}
