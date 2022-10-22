import React from "react";
import Layout from "../components/Layout/Layout";
import DetailImage from "../components/RoomsData/DetailImage";
import RoomDetail from "../components/RoomsData/RoomDetail";
import RoomHero from "../components/RoomsData/RoomHero";
import RoomOptions from "../components/RoomsData/RoomOptions";

const Room = () => {
  return (
    <Layout>
      <RoomHero />
      <RoomDetail />
      <DetailImage />
      <RoomOptions />
    </Layout>
  );
};

export default Room;
