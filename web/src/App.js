import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import LecDetAnnouncements from "./pages/LecturePages/LecDetAnnouncements";
import LecDetAttendance from "./pages/LecturePages/LecDetAttendance";
import LecDetCalendar from "./pages/LecturePages/LecDetCalendar";
import LecDetPeople from "./pages/LecturePages/LecDetPeople";
import LectureDetails from "./pages/LecturePages/LectureDetails";
import LecturesPage from "./pages/LecturePages/LecturesPage";
import LoginPage from "./pages/Authentication/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from "./pages/Authentication/SignUpPage";
import AddTeacher from "./pages/AdminPages/AddTeacher";
import AddStudent from "./pages/AdminPages/AddStudent";
import AddLecture from "./pages/AdminPages/AddLecture";
import AddSemester from "./pages/AdminPages/AddSemester";
import AdminDisplayLectures from "./pages/AdminPages/AdminDisplayLectures";
import AdminDisplaySemesters from "./pages/AdminPages/AdminDisplaySemesters";
import AdminDisplayStudents from "./pages/AdminPages/AdminDisplayStudents";
import AdminDisplayTeachers from "./pages/AdminPages/AdminDisplayTeachers";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LecturesPage />} path="/lectures" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignUpPage />} path="/signup" />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<LectureDetails />} path="/lectureDetails" />
        <Route element={<LecDetAnnouncements />} path="/lectureDetails/announcements" />
        <Route element={<LecDetAttendance />} path="/lectureDetails/attendance" />
        <Route element={<LecDetCalendar />} path="/lectureDetails/calendar" />
        <Route element={<LecDetPeople />} path="/lectureDetails/people" />
        <Route element={<AddTeacher />} path="/admin/addTeacher" />
        <Route element={<AddStudent />} path="/admin/addStudent" />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<AddLecture />} path="/admin/addLecture" />
        <Route element={<AddSemester />} path="/admin/addSemester" />
        <Route element={<AdminDisplayLectures />} path="/admin/displayLectures" />
        <Route element={<AdminDisplaySemesters />} path="/admin/displaySemesters" />
        <Route element={<AdminDisplayStudents />} path="/admin/displayStudents" />
        <Route element={<AdminDisplayTeachers />} path="/admin/displayTeachers" />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
