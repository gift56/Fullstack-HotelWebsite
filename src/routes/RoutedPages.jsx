import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Resturants from "../pages/Resturants";
import Room from "../pages/Room";

const RoutedPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Resturants />} />
      </Routes>
    </>
  );
};

export default RoutedPages;
