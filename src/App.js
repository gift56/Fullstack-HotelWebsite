import React from "react";
import { ThemeProvider } from "styled-components";
import RoutedPages from "./routes/RoutedPages";

const App = () => {
  const theme = {
    spanText: "#FCD043",
    heroBg: "#2A5B46",
    whiteColor: "#FFFCF6",
    textColor: "#333333",
    darkColor: "#313F38",
    darkColor2: "#2c332f",
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
        <RoutedPages />
      </ThemeProvider>
    </div>
  );
};

export default App;
