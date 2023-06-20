import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/Home/HomePage";
import CollectionPage from "./components/Collection/CollectionPage";
import AboutMePage from "./components/AboutMe/AboutMePage";
import AboutWebsitePage from "./components/AboutWebsite/AboutWebsitePage";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import backgroundPaper from "./images/textured_paper.png";
import "./App.css";

const AppContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundImage: `url(${backgroundPaper})`,
}));

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Routes>
          <Route exact key="Home" path="/" element={<HomePage />} />
          <Route
            exact
            key="Collection"
            path="/collection"
            element={<CollectionPage />}
          />
          <Route
            exact
            key="AboutMe"
            path="/aboutme"
            element={<AboutMePage />}
          />
          <Route
            exact
            key="AboutWebsite"
            path="/aboutwebsite"
            element={<AboutWebsitePage />}
          />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
