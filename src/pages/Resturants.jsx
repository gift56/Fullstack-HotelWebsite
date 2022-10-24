import React from "react";
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
    </Layout>
  );
};

export default Resturants;
