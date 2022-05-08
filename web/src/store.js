import { configureStore } from '@reduxjs/toolkit'
import studentSlice from './redux/features/student/studentSlice'
import teacherSlice from './redux/features/teacher/teacherSlice'

export const store = configureStore({
  reducer: {
      students: studentSlice,
      teachers: teacherSlice
  },
})