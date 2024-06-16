import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './appReducer'
import { TypedUseSelectorHook } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
