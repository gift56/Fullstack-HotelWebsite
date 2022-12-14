import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
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
        <Route path="/restaurant" element={<Resturants />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default RoutedPages;
