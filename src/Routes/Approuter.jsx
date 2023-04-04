import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import HomeLayout from "../layout/HomeLayout";
import Register from "../pages/Register";
import ProfileLayout from "../layout/ProfileLayout";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfileLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
