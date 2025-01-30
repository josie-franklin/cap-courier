import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import rippedPaper from "../../images/rippedpapertextured_fordrawer.PNG";
import backgroundPaper from "../../images/textured_paper.png";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const DrawerProps = {
  sx: {
    // paddingTop: "10vh",
    backgroundColor: "transparent",
    backgroundImage: `url(${backgroundPaper})`,
    // boxShadow: "none",
    // "&.MuiPaper-root": {
    //   overflowY: "scroll",
    // },
  },
};

const StyledDrawer = (props) => {
  const { drawerOpen, setDrawerOpen, content } = props;

  return (
    <Drawer
      anchor="bottom"
      open={drawerOpen}
      PaperProps={DrawerProps}
      sx={{ display: { xs: "block", md: "none" } }}
      onClose={() => {
        setDrawerOpen(false);
      }}
    >
      <Box sx={{ padding: "20px", height: "85vh" }}>
        <IconButton
          onClick={() => {
            setDrawerOpen(false);
          }}
          sx={{
            position: "absolute",
            right: "5%",
          }}
        >
          <CloseIcon />
        </IconButton>
        {content}
      </Box>
    </Drawer>
  );
};

export default StyledDrawer;
