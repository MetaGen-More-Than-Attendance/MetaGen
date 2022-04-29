import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
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
import AddTeacher from "./pages/AdminPages/AddTeacher";
import AddStudent from "./pages/AdminPages/AddStudent";
import AddLecture from "./pages/AdminPages/AddLecture";
import AddSemester from "./pages/AdminPages/AddSemester";
import AdminDisplayLectures from "./pages/AdminPages/AdminDisplayLectures";
import AdminDisplaySemesters from "./pages/AdminPages/AdminDisplaySemesters";
import AdminDisplayStudents from "./pages/AdminPages/AdminDisplayStudents";
import AdminDisplayTeachers from "./pages/AdminPages/AdminDisplayTeachers";
function App() {
  const [userHasLogin, setUserHasLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setUserHasLogin(true);
    }
  }, []);

  return (
    <div>
      {userHasLogin && <Header userHasLogin={userHasLogin} />}
      <Routes>
        <Route element={<LoginPage />} path="/" />
        {userHasLogin && <Route element={<HomePage />} path="/home" />}
        {userHasLogin && <Route element={<LecturesPage />} path="/lectures" />}
        {userHasLogin && <Route element={<ProfilePage />} path="/profile" />}
        {userHasLogin && <Route element={<LectureDetails />} path="/lectureDetails" />}
        {userHasLogin && <Route element={<LecDetAnnouncements />} path="/lectureDetails/announcements" />}
        {userHasLogin && <Route element={<LecDetAttendance />} path="/lectureDetails/attendance" />}
        {userHasLogin && <Route element={<LecDetCalendar />} path="/lectureDetails/calendar" />}
        {userHasLogin && <Route element={<LecDetPeople />} path="/lectureDetails/people" />}
        {userHasLogin && <Route element={<AddTeacher />} path="/admin/addTeacher" />}
        {userHasLogin && <Route element={<AddStudent />} path="/admin/addStudent" />}
        {userHasLogin && <Route element={<ProfilePage />} path="/profile" />}
        {userHasLogin && <Route element={<AddLecture />} path="/admin/addLecture" />}
        {userHasLogin && <Route element={<AddSemester />} path="/admin/addSemester" />}
        {userHasLogin && <Route element={<AdminDisplayLectures />} path="/admin/displayLectures" />}
        {userHasLogin && <Route element={<AdminDisplaySemesters />} path="/admin/displaySemesters" />}
        {userHasLogin && <Route element={<AdminDisplayStudents />} path="/admin/displayStudents" />}
        {userHasLogin && <Route element={<AdminDisplayTeachers />} path="/admin/displayTeachers" />}
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </div >
  );
}

export default App;
