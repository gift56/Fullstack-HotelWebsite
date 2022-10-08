import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Room from "../pages/Room";

const RoutedPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Room />} />
      </Routes>
    </>
  );
};

export default RoutedPages;
