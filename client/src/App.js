import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import CollectionContextProvider from "./context/CollectionContext";
import Header from "./components/Header";
import HomePage from "./components/Home/HomePage";
import CollectionPage from "./components/Collection/CollectionPage";
import AboutMePage from "./components/AboutMe/AboutMePage";
import AboutWebsitePage from "./components/AboutWebsite/AboutWebsitePage";
import Footer from "./components/Footer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import backgroundPaper from "./images/textured_paper.png";
import "./App.css";

const AppContainer = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundImage: `url(${backgroundPaper})`,
  padding: "0 40px",
  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));

const App = () => {
  return (
    <AppContainer>
      <Auth0Provider
        domain="orange-water-6755.us.auth0.com"
        clientId="9LVxPdpi6EZqsXruueSHvP4sDkwG53vd"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route exact key="Home" path="/" element={<HomePage />} />
            <Route
              exact
              key="Collection"
              path="/collection"
              element={
                <CollectionContextProvider>
                  <CollectionPage />
                </CollectionContextProvider>
              }
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
          <Footer />
        </Router>
      </Auth0Provider>
    </AppContainer>
  );
};

export default App;
