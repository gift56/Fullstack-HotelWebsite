import React from "react";
import GetInTourch from "../components/Home/GetInTourch";
import Layout from "../components/Layout/Layout";
import ResturantHero from "../components/ResturantData/ResturantHero";
import ResturantOffer from "../components/ResturantData/ResturantOffer";
import ResturantSpace from "../components/ResturantData/ResturantSpace";

const Resturants = () => {
  return (
    <Layout>
      <ResturantHero />
      <ResturantOffer />
      <ResturantSpace />
      <GetInTourch />
    </Layout>
  );
};

export default Resturants;
