import React, { useContext, useEffect } from "react";
import { CollectionContext } from "../../context/CollectionContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import bottlecapImage from "../../images/bottlecap.png";
import bottlecapImageWithBG from "../../images/bottlecapWithBG.jpg";

const ImageContainer = styled(Box)(() => ({
  width: "100%",
  padding: "20px"
}));

const ImageLabel = styled(Typography)(() => ({
  fontFamily: "Georgia, serif",
  textAlign: "right",
  fontSize: ".8rem",
  // paddingRight: "20px"
}));

const SearchResults = () => {
  const { bottlecapObj } = useContext(CollectionContext);

  // useEffect(() => {

  // }, [bottlecapObj]);

  const results = bottlecapObj ? (
    <Grid container>
      {bottlecapObj.map((bottlecap, i) => (
        <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
          <ImageContainer>
            <img src={bottlecapImageWithBG} style={{ width: "100%" }} />
            <ImageLabel>{bottlecap.source.toUpperCase()}</ImageLabel>
          </ImageContainer>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Box>There's nothing here.</Box>
  );

  let contents = !bottlecapObj ? <p>Loading...</p> : results;

  return <Box sx={{ marginTop: "20px" }}>{contents}</Box>;
};

export default SearchResults;
