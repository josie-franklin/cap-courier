import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Title = styled(Typography)(() => ({
  fontFamily: "chomsky",
  textAlign: "center"
}))

const Nav = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  borderTop: "var(--thin-border)",
  borderBottom: "var(--thick-border)",
  //paddingTop: "3px"
}));

const LinkContainer = styled(Box)(() => ({
  width: "20%",
  display: "flex",
  justifyContent: "center"
}))

const StyledLink = styled(Link)(() => ({
  color: "var(--primary)",
  textDecoration: "none",
  fontFamily: "Georgia, serif",
  display: "flex",
  alignItems: "center"
}))

const Header = () => {
  return (
    <Box position="static" sx={{margin: "0 40px"}}>
      <Title variant="h1">The Cap Courier</Title>
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
          <Typography sx={{fontFamily: "Georgia, serif", fontWeight: "bold"}}>Tuesday, June 20th</Typography>
        </LinkContainer>
        <LinkContainer>
          <StyledLink key="About Me" component={ReactLink} to="aboutme">
            ABOUT ME
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink key="About Website" component={ReactLink} to="aboutwebsite">
            ABOUT WEBSITE
          </StyledLink>
        </LinkContainer>
      </Nav>
    </Box>
  );
};

export default Header;
