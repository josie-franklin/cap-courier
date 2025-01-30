import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import bottlecapImage from "../../images/bottlecap.png";

const MainSection = styled(Box)(({ theme }) => ({
  padding: "20px 0 20px",
  marginRight: "20px",
  [theme.breakpoints.down("md")]: {
    marginRight: "0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

const SideSection = styled(Box)(({ theme }) => ({
  margin: "20px 20px 0",
  paddingBottom: "20px",
  [theme.breakpoints.down("md")]: {
    margin: "20px 0 0 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 20px 20px",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "45%",
  float: "left",
  marginRight: "15px",
  [theme.breakpoints.up("sm")]: {
    width: "30%",
  },
  [theme.breakpoints.up("md")]: {
    width: "25%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "20%",
  },
}));

const ArticleTitle = styled(Typography)(() => ({
  fontFamily: "cheltenham",
  fontSize: "1.4rem",
}));

const ArticleContent = styled(Typography)(() => ({
  fontFamily: "imperial",
  marginTop: "16px",
  textAlign: "justify",
  lineHeight: "2"
}));

const Divider = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
  display: "none",
  width: "100%",
  padding: "0.25rem",
  borderBottom: "var(--thin-border)",
  borderTop: "var(--thick-border)",
}));

const HomePage = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, margin: "24px 0" }}>
      <Grid container>
        <Grid item xs={12} md={9}>
          <Stack>
            <MainSection
              component="section"
              sx={{ borderBottom: "var(--thick-border)" }}
            >
              <ImageContainer>
                <img src={bottlecapImage} style={{ width: "100%" }} />
              </ImageContainer>
              <ArticleTitle>Featured Cap</ArticleTitle>
              <ArticleContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ArticleContent>
            </MainSection>
            <MainSection component="section">
              <ImageContainer>
                <img src={bottlecapImage} style={{ width: "100%" }} />
              </ImageContainer>
              <ArticleTitle>Recent Trade</ArticleTitle>
              <ArticleContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ArticleContent>
            </MainSection>
          </Stack>
        </Grid>
        <Divider />
        <Grid
          item
          xs={12}
          md={3}
          sx={{ borderLeft: { xs: "none", md: "var(--thin-border)" } }}
        >
          <Stack>
            <SideSection sx={{ borderBottom: "var(--thin-border)" }}>
              <ArticleTitle>Hunting For:</ArticleTitle>
              <ArticleContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </ArticleContent>
            </SideSection>
            <SideSection sx={{ borderBottom: "var(--thin-border)" }}>
              <ArticleTitle>Resources</ArticleTitle>
              <ArticleContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </ArticleContent>
            </SideSection>
            <SideSection>
              <ArticleTitle>Trusted Traders</ArticleTitle>
              <ArticleContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </ArticleContent>
            </SideSection>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
