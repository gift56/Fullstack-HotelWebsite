import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

const App = () => {
  const theme = {
    spanText: "#FCD043",
    heroBg: "#2A5B46",
    whiteColor: "#FFFCF6",
    textColor: "#333333",
    darkColor: "#313F38",
    mobile: {
      BigLap: "1490px",
      minLap: "1180px",
      tab: "982px",
      phone2: "768px",
      phone: "400px",
    },
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
