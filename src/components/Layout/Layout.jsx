import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "./Main";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
