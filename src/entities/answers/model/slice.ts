import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAnswer } from './interfaces'

export interface AnswersState {
  answers: IAnswer[]
}

const initialState: AnswersState = {
  answers: []
}

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer(state, action: PayloadAction<IAnswer>) {
      state.answers.push(action.payload)
    },
    resetAnswers(state) {
      state.answers = []
    }
  }
})

export default answersSlice.reducer
export const { addAnswer, resetAnswers } = answersSlice.actions
