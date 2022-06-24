import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SignUp from "./pages/SignUp/SignUp";
import NewPassword from "./pages/NewPassword/NewPassword";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import DashBoard from "./components/Common/DashBoard/DashBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/profile_details" element={<UpdateProfile />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
