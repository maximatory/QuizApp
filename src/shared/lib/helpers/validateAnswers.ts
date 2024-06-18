import { IQuestion } from '@/entities/questions/model/interfaces'

export const validateAnswers = (question: IQuestion, answer: string[]): boolean => {
  if (question.type === 'SingleChoice' || question.type === 'MultipleChoice') {
    return answer.length > 0
  } else if (question.type === 'ShortText' || question.type === 'LongText') {
    return answer.length > 0 && answer[0].trim() !== ''
  }
  return true
}
