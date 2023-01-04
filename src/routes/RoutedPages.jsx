import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Resturants from "../pages/Resturants";
import Room from "../pages/Room";

const RoutedPages = () => {
  const getBg = "#FFFCF6";

  // const getBg2 = "#FFFCF6";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home getBg={getBg} />} />
        <Route path="/rooms" element={<Room getBg={getBg} />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Resturants />} />
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </>
  );
};

export default RoutedPages;
