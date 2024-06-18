import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAnswer } from './interfaces'

export interface AnswersState {
  answers: IAnswer[]
}

const initialState: AnswersState = {
  answers: JSON.parse(localStorage.getItem('answers') || '[]')
}

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer(state, action: PayloadAction<IAnswer>) {
      state.answers.push(action.payload)
      localStorage.setItem('answers', JSON.stringify(state.answers))
    },
    resetAnswers(state) {
      state.answers = []
      localStorage.removeItem('answers')
    }
  }
})

export default answersSlice.reducer
export const { addAnswer, resetAnswers } = answersSlice.actions
