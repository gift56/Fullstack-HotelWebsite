import React from "react";
import GetInTourch from "../components/Home/GetInTourch";
import Layout from "../components/Layout/Layout";
import DetailImage from "../components/RoomsData/DetailImage";
import RoomDetail from "../components/RoomsData/RoomDetail";
import RoomHero from "../components/RoomsData/RoomHero";
import RoomOptions from "../components/RoomsData/RoomOptions";

const Room = ({ getBg }) => {
  return (
    <Layout>
      <RoomHero />
      <RoomDetail />
      <DetailImage />
      <RoomOptions />
      <GetInTourch getBg={getBg} />
    </Layout>
  );
};

export default Room;
