import React from "react";
import AboutUs from "../components/AboutUs";
import BestApartment from "../components/BestApartment";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";
import GetInTourch from "../components/GetInTourch";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import RoomandApartment from "../components/RoomandApartment";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <RoomandApartment />
      <Facilities />
      <BestApartment />
      <Gallery />
      <GetInTourch />
    </Layout>
  );
};

export default Home;
