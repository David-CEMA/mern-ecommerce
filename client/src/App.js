import React from "react";
// import {BrowserRouter as Router} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {DataProvider} from "./GlobalState";
import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/Pages";
import ContactIcon from "./components/ContactIcon";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="app">
          <Header />
          <MainPages />
          <ContactIcon />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
