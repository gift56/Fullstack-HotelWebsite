import React from "react";
import Layout from "../components/Layout/Layout";
import DetailImage from "../components/RoomsData/DetailImage";
import RoomDetail from "../components/RoomsData/RoomDetail";
import RoomHero from "../components/RoomsData/RoomHero";

const Room = () => {
  return (
    <Layout>
      <RoomHero />
      <RoomDetail />
      <DetailImage />
    </Layout>
  );
};

export default Room;
