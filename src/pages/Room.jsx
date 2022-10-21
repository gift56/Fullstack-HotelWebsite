import React from "react";
import Layout from "../components/Layout/Layout";
import RoomDetail from "../components/RoomsData/RoomDetail";
import RoomHero from "../components/RoomsData/RoomHero";

const Room = () => {
  return (
    <Layout>
      <RoomHero />
      <RoomDetail />
    </Layout>
  );
};

export default Room;
