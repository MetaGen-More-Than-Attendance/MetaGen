import { configureStore } from '@reduxjs/toolkit'
import studentSlice from './redux/features/student/studentSlice'

export const store = configureStore({
  reducer: {
      students: studentSlice
  },
})