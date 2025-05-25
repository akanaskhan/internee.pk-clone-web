import { useContext, useState } from "react";
import "./App.css";
import "./Loader.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx"; 
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Internship from "./pages/Internship.jsx";
import GraduateProgram from "./pages/GraduateProgram.jsx";
import StudentAmbassadorSection from "./pages/StudentAmbassadorSection.jsx";
import SignUp from "./pages/auth/signup.jsx";
import SignIn from "./pages/auth/SignIn.jsx";


function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/graduateprogram" element={<GraduateProgram />} />
        <Route path="/studentambassadors" element={<StudentAmbassadorSection />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
