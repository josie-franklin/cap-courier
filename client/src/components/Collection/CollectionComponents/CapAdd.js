import React, { useContext, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ArticleTitle = styled(Typography)(() => ({
  fontFamily: "cheltenham",
  fontSize: "1.4rem",
  marginBottom: "16px",
  marginTop: "20px",
}));

const CapAdd = () => {
  return (
    <Box>
      <ArticleTitle>Add a new cap</ArticleTitle>
    </Box>
  );
};

export default CapAdd;
