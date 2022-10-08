import React from "react";
import AboutUs from "../components/AboutUs";
import BestApartment from "../components/BestApartment";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import GetInTourch from "../components/GetInTourch";
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
      <BestApartment />
      <Gallery />
      <GetInTourch />
      <Footer />
    </>
  );
};

export default Home;
