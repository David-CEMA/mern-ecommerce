import React from "react";
// import {BrowserRouter as Router} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {DataProvider} from "./GlobalState";
// import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/Pages";
import ContactIcon from "./components/ContactIcon";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="app">
          <ScrollToTop />
          {/* <Header /> */}
          <MainPages />
          <ContactIcon />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
// "@mui/material": "^5.4.2",
