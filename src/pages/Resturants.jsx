import React from "react";
import Layout from "../components/Layout/Layout";
import ResturantHero from "../components/ResturantData/ResturantHero";
import ResturantOffer from "../components/ResturantData/ResturantOffer";

const Resturants = () => {
  return (
    <Layout>
      <ResturantHero />
      <ResturantOffer />
    </Layout>
  );
};

export default Resturants;
