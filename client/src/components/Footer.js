import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Strip = styled(Box)(({ theme }) => ({
  width: "100%",
  justifyContent: "center",
  borderTop: "var(--thin-border)",
  display: "flex",
}));

const StyledLink = styled(Box)(() => ({
  color: "var(--primary)",
  textDecoration: "none",
  fontFamily: "Georgia, serif",
  display: "flex",
  alignItems: "center",
  paddingTop: "3px",
  "&:hover": {
    cursor: "pointer",
  },
}));

const Footer = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  useEffect(() => {}, []);

  return (
    <Box sx={{ paddingBottom: "20px" }}>
      <Strip>
        {!isAuthenticated && (
          <StyledLink onClick={loginWithRedirect}>
            Copyright © 2023 The Cap Courier - Design by Josie Franklin
          </StyledLink>
        )}
        {isAuthenticated && (
          <StyledLink
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Welcome, Josie!
          </StyledLink>
        )}
      </Strip>
    </Box>
  );
};

export default Footer;
