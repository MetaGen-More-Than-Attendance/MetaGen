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
import ProtectedRoutes from "./ProtectedRoutes";

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
        <Route element={
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
        } path="/home" />
        <Route element={
          <ProtectedRoutes>
            <LecturesPage />
          </ProtectedRoutes>
        } path="/lectures" />
        <Route element={
          <ProtectedRoutes>
            <ProfilePage />
          </ProtectedRoutes>
        } path="/profile" />
        <Route element={
          <ProtectedRoutes>
            <LectureDetails />
          </ProtectedRoutes>
        } path="/lectureDetails" />
        <Route element={
          <ProtectedRoutes>
            <LecDetAnnouncements />
          </ProtectedRoutes>} path="/lectureDetails/announcements" />
        <Route element={
          <ProtectedRoutes>
            <LecDetAttendance />
          </ProtectedRoutes>} path="/lectureDetails/attendance" />
        <Route element={
          <ProtectedRoutes>
            <LecDetCalendar />
          </ProtectedRoutes>} path="/lectureDetails/calendar" />
        <Route element={
          <ProtectedRoutes>
            <LecDetPeople />
          </ProtectedRoutes>} path="/lectureDetails/people" />
        <Route element={
          <ProtectedRoutes>
            <AddTeacher />
          </ProtectedRoutes>} path="/admin/addTeacher" />
        <Route element={
          <ProtectedRoutes>
            <AddStudent />
          </ProtectedRoutes>} path="/admin/addStudent" />
        <Route element={
          <ProtectedRoutes>
            <AddLecture />
          </ProtectedRoutes>} path="/admin/addLecture" />
        <Route element={
          <ProtectedRoutes>
            <AddSemester />
          </ProtectedRoutes>} path="/admin/addSemester" />
        <Route element={
          <ProtectedRoutes>
            <AdminDisplayLectures />
          </ProtectedRoutes>} path="/admin/displayLectures" />
        <Route element={
          <ProtectedRoutes>
            <AdminDisplaySemesters />
          </ProtectedRoutes>} path="/admin/displaySemesters" />
        <Route element={
          <ProtectedRoutes>
            <AdminDisplayStudents />
          </ProtectedRoutes>} path="/admin/displayStudents" />
        <Route element={
          <ProtectedRoutes>
            <AdminDisplayTeachers />
          </ProtectedRoutes>} path="/admin/displayTeachers" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </div >
  );
}

export default App;
