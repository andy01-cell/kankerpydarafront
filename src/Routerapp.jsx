import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./autentikasi/Login";
import About from "./main/Tentang/About";
import Diagnosis from "./main/klasifikasi/Diagnosis";
import Navbar from "./main/Navbar";
import Characteristic from "./main/karakteristik/Characteristic";
import Home from "./main/Homes/Home";
import Testappbar from "./main/Testappbar";
import Hasildiagnosa from "./main/klasifikasi/Hasildiagnosa";

const Routerapp = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/Characteristic" element={<Characteristic />} />
        <Route path="/Diagnosis" element={<Diagnosis />} />
        <Route path="/About" element={<About />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Testappbar" element={<Testappbar />} />
      <Route path="/Hasildiagnosa" element={<Hasildiagnosa />} />
    </Routes>
  );
};

export default Routerapp;
