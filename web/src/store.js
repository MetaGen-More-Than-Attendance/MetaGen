import { configureStore } from '@reduxjs/toolkit'
import departmentSlice from './redux/features/department/departmentSlice'
import lectureSlice from './redux/features/lecture/lectureSlice'
import studentSlice from './redux/features/student/studentSlice'
import teacherSlice from './redux/features/teacher/teacherSlice'

export const store = configureStore({
  reducer: {
      students: studentSlice,
      teachers: teacherSlice,
      lectures: lectureSlice,
      departments: departmentSlice
  },
})