import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import Login from "./components/Login";
import Home from "./components/Home";
import AllUsersProfile from "./components/AllUsersProfile";
import ProfilePage from "./components/ProfilePage";
import ViewProfile from "./components/ViewProfile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Login is the default page */}
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/AllUsersProfile" element={<AllUsersProfile />} />
        <Route path="/ViewProfile" element={<ViewProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
