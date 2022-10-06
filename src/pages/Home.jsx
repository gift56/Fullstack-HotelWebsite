import React from "react";
import AboutUs from "../components/AboutUs";
import Facilities from "../components/Facilities";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RoomandApartment from "../components/RoomandApartment";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <RoomandApartment />
      <Facilities />
    </>
  );
};

export default Home;
