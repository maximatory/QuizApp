import { combineReducers } from '@reduxjs/toolkit'
import questionsSlice from '../entities/questions/model/slice'
import answersSlice from '@/entities/answers/model/slice'

export const rootReducer = combineReducers({
  questions: questionsSlice,
  answers: answersSlice
})
