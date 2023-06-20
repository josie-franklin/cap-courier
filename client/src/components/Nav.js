import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const CustomAppBar = styled(Box)(() => ({
  color: "var(--light-grey)",
  backgroundColor: "var(--dark-grey)",
}));

const Nav = () => {
  const pages = ["Home", "Collection"];
  const routes = ["", "collection"];

  return (
    <CustomAppBar position="static">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Typography>Cap Courier</Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }} />
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {pages.map((page, i) => (
              <Link
                key={page}
                component={ReactLink}
                to={`/${routes[i]}`}
                sx={{ padding: "5px" }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};

export default Nav;
