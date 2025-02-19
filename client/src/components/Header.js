import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderContainer = styled(Box)(() => ({
  position: "static",
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    margin: "0 20px",
    display: "flex",
  },
  justifyContent: "space-between",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "chomsky",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.7rem",
  },
}));

const Nav = styled(Box)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-evenly",
  borderTop: "var(--thin-border)",
  borderBottom: "var(--thick-border)",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LinkContainer = styled(Box)(() => ({
  width: "20%",
  display: "flex",
  justifyContent: "center",
}));

const StyledLink = styled(Link)(() => ({
  color: "var(--primary)",
  textDecoration: "none",
  fontFamily: "Georgia, serif",
  display: "flex",
  alignItems: "center",
}));

const Divider = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
  display: "none",
  width: "100%",
  padding: "0.25rem",
  borderTop: "var(--thin-border)",
  borderBottom: "var(--thick-border)",
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
  display: "none",
  paddingLeft: "0",
}));

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <TitleContainer>
        <MenuButton
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <MenuIcon fontSize="large" sx={{ marginTop: "7px" }} />
        </MenuButton>

        <Title variant="h1">The Cap Courier</Title>
      </TitleContainer>

      <Nav component="nav">
        <LinkContainer>
          <StyledLink key="Home" component={ReactLink} to="">
            HOME
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink key="Collection" component={ReactLink} to="collection">
            COLLECTION
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <Typography sx={{ fontFamily: "Georgia, serif", fontWeight: "bold" }}>
            Tuesday, June 20th
          </Typography>
        </LinkContainer>
        <LinkContainer>
          <StyledLink key="About Me" component={ReactLink} to="about-me">
            ABOUT ME
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink
            key="About Website"
            component={ReactLink}
            to="about-website"
          >
            ABOUT WEBSITE
          </StyledLink>
        </LinkContainer>
      </Nav>

      <Divider />

      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <Divider sx={{ marginTop: { xs: "4rem", sm: "4.7rem" } }} />
        <Box component="nav" sx={{ width: "260px", margin: "0 20px" }}>
          <Box sx={{ width: "100%", marginTop: "20px", paddingBottom: "10px" }}>
            <StyledLink
              key="Home"
              component={ReactLink}
              to=""
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              HOME
            </StyledLink>
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: "10px 0",
              borderTop: "var(--thin-border)",
            }}
          >
            <StyledLink
              key="Home"
              component={ReactLink}
              to="collection"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              COLLECTION
            </StyledLink>
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: "10px 0",
              borderTop: "var(--thin-border)",
            }}
          >
            <StyledLink
              key="Home"
              component={ReactLink}
              to="aboutme"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              ABOUT ME
            </StyledLink>
          </Box>

          <Box
            sx={{
              width: "100%",
              padding: "10px 0",
              borderTop: "var(--thin-border)",
            }}
          >
            <StyledLink
              key="Home"
              component={ReactLink}
              to="aboutwebsite"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              ABOUT WEBSITE
            </StyledLink>
          </Box>
        </Box>
      </Drawer>
    </HeaderContainer>
  );
};

export default Header;
