import React from "react";
import Header from "../components/Header/Header";
import { Container } from "../styles/Container/container.styled";
import { PageContainer } from "../styles/Page404Style/Page404.styled";

const Page404 = () => {
  return (
    <>
      <Header />
      <Container>
        <PageContainer>
          <h2>Ooops</h2>
          <h1>404</h1>
          <p>Page Not Found</p>
        </PageContainer>
      </Container>
    </>
  );
};

export default Page404;
