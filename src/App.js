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
    fontStack: "Miracle', sans-serif",
    mobile: {
      minLap: "1080px",
      tab: "902px",
      tab2: "982px",
      phone: "768px",
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
