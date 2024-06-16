export type QuestionType = 'SingleChoice' | 'MultipleChoice' | 'ShortText' | 'LongText'

export enum QuestionState {
  Waiting = 'waiting',
  Focus = 'focus',
  Completed = 'completed'
}

export interface IQuestion {
  id: string
  type: QuestionType
  questionText: string
  options?: string[]
}

export interface ITest {
  timerSeconds: number
  questions: IQuestion[]
}
