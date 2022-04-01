import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import LecDetAnnouncements from "./pages/LecDetAnnouncements";
import LecDetAttendance from "./pages/LecDetAttendance";
import LecDetCalendar from "./pages/LecDetCalendar";
import LecDetPeople from "./pages/LecDetPeople";
import LectureDetails from "./pages/LectureDetails";
import LecturesPage from "./pages/LecturesPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import AddTeacher from "./pages/AddTeacher";

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
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
