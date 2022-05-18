import { configureStore } from '@reduxjs/toolkit'
import lecturesOfStudentSlice from './redux/features/admin/lecturesOfStudentSlice'
import lecturesOfTeacherSlice from './redux/features/admin/lecturesOfTeacherSlice'
import departmentSlice from './redux/features/department/departmentSlice'
import lectureSlice from './redux/features/lecture/lectureSlice'
import semesterSlice from './redux/features/semester/semesterSlice'
import studentSlice from './redux/features/student/studentSlice'
import teacherSlice from './redux/features/teacher/teacherSlice'

export const store = configureStore({
  reducer: {
      students: studentSlice,
      teachers: teacherSlice,
      lectures: lectureSlice,
      departments: departmentSlice,
      semesters: semesterSlice,
      lecturesOfStudent: lecturesOfStudentSlice,
      lecturesOfTeacher: lecturesOfTeacherSlice
  },
})