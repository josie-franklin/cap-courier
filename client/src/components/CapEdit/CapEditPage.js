import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Box from "@mui/material/Box";

const CapEditPage = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, margin: "24px 40px 0" }}>
      <p>cap</p>
    </Box>
  );
};

export default CapEditPage;
