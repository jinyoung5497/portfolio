import { configureStore } from '@reduxjs/toolkit'
import pageSlice from './pageSlice'

export const store = configureStore({
  reducer: {
    pages: pageSlice,
  },
})
