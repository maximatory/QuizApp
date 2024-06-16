import { combineReducers } from '@reduxjs/toolkit'
import questionsSlice from '../entities/questions/model/slice'

export const rootReducer = combineReducers({
  questions: questionsSlice
})
