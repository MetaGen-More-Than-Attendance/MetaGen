import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import LecturesPage from "./pages/LecturesPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LecturesPage/>} path="/lectures" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignUpPage />} path="/signup" />
        <Route element={<ProfilePage />} path="/profile" />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
