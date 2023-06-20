import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import bottlecapImage from "../../images/bottlecap.png";

const SearchBar = styled(TextField)(() => ({
  width: "100%",
}));

const ImageContainer = styled(Box)(() => ({
  width: "150px",
}));

const CollectionPage = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, margin: "24px 40px 0" }}>
      <Box sx={{ margin: "0 20px" }}>
        <SearchBar
          variant="outlined"
          type="search"
          label="Search for a bottle cap."
        />
      </Box>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 20px 0",
        }}
      >
        <TextField select sx={{ width: "15%" }} />
        <TextField select sx={{ width: "15%" }} />
        <TextField select sx={{ width: "15%" }} />
        <TextField select sx={{ width: "15%" }} />
        <TextField select sx={{ width: "15%" }} />
      </Stack>
      <Box sx={{marginTop: "20px"}}>
        <Grid container>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ImageContainer>
              <img src={bottlecapImage} style={{ width: "100%" }} />
            </ImageContainer>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ImageContainer>
              <img src={bottlecapImage} style={{ width: "100%" }} />
            </ImageContainer>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ImageContainer>
              <img src={bottlecapImage} style={{ width: "100%" }} />
            </ImageContainer>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ImageContainer>
              <img src={bottlecapImage} style={{ width: "100%" }} />
            </ImageContainer>
          </Grid><Grid item xs={6} sm={4} md={3} lg={2}>
            <ImageContainer>
              <img src={bottlecapImage} style={{ width: "100%" }} />
            </ImageContainer>
          </Grid><Grid item xs={6} sm={4} md={3} lg={2}>
            <ImageContainer>
              <img src={bottlecapImage} style={{ width: "100%" }} />
            </ImageContainer>
          </Grid><Grid item xs={6} sm={4} md={3} lg={2}>
            <ImageContainer>
              <img src={bottlecapImage} style={{ width: "100%" }} />
            </ImageContainer>
          </Grid><Grid item xs={6} sm={4} md={3} lg={2}>
            <ImageContainer>
              <img src={bottlecapImage} style={{ width: "100%" }} />
            </ImageContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CollectionPage;
