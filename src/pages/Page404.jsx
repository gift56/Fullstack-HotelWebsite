import React from "react";
import Header from "../components/Header/Header";
import { Container } from "../styles/Container/container.styled";
import { MyArea, PageContainer } from "../styles/Page404Style/Page404.styled";
import Desktophero from "../assets/desktopH.svg";

const Page404 = () => {
  return (
    <>
      <Header />
      <MyArea bg={Desktophero}>
        <Container>
          <PageContainer>
            <h2>Ooops</h2>
            <h1>404</h1>
            <p>Page Not Found</p>
          </PageContainer>
        </Container>
      </MyArea>
    </>
  );
};

export default Page404;
