export type QuestionType = 'SingleChoice' | 'MultipleChoice' | 'ShortText' | 'LongText'

export type QuestionState = 'waiting' | 'focus' | 'completed'

export interface IQuestion {
  id: string
  type: QuestionType
  questionText: string
  state: QuestionState
  options?: string[]
}

export interface ITest {
  timerSeconds: number
  questions: IQuestion[]
}
