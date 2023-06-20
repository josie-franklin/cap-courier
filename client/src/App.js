import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/Home/HomePage";
import CollectionPage from "./components/Collection/CollectionPage";
import "./index.css";

const App = () => {
  return (
    <div id="app-container">
      <Router>
        <Nav />
        <Routes>
          <Route exact key="Home" path="/" element={<HomePage />} />
          <Route exact key="Collection" path="/collection" element={<CollectionPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
