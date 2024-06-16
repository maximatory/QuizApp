import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITest } from './interfaces'

interface State {
  questionsData: ITest | null
}

const initialState: State = {
  questionsData: null
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    initializeQuestionsData(state, action: PayloadAction<ITest>) {
      if (state.questionsData !== null) {
        return
      }
      state.questionsData = action.payload
    }
  }
})

export default questionsSlice.reducer
export const { initializeQuestionsData } = questionsSlice.actions
