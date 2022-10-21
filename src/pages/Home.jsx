import React from "react";
import AboutUs from "../components/Home/AboutUs";
import BestApartment from "../components/Home/BestApartment";
import Facilities from "../components/Home/Facilities";
import Gallery from "../components/Home/Gallery";
import GetInTourch from "../components/Home/GetInTourch";
import Hero from "../components/Home/Hero";
import RoomandApartment from "../components/Home/RoomandApartment";
import Layout from "../components/Layout/Layout";

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
