import { IQuestion } from '@/entities/questions/model/interfaces'
import GroupChoice from '@/shared/ui/GroupChoice/GroupChoice'
import InputText from '@/shared/ui/InputText/InputText'

export interface QuestionFactoryProps {
  question: IQuestion
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const QuestionFactory = ({ question, handleChange }: QuestionFactoryProps) => {
  switch (question.type) {
    case 'SingleChoice':
    case 'MultipleChoice':
      return <GroupChoice type={question.type} options={question.options} handleInputChange={handleChange} />
    case 'ShortText':
    case 'LongText':
      return <InputText type={question.type} handleTextChange={handleChange} id={question.id} />
    default:
      return <div>Unknown question type</div>
  }
}

export default QuestionFactory
