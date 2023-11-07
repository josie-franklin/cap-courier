import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import rippedPaper from "../../images/rippedpapertextured.PNG";
import paperclip from "../../images/paperclip2.png";

const StyledDialog = (props) => {
  const { dialogOpen, setDialogOpen, content } = props;

  const DialogPaperBG = styled(Paper)(() => ({
    padding: "16px 16px 48px 48px",
    backgroundColor: "transparent",
    backgroundImage: `url(${rippedPaper})`,
    backgroundSize: "cover",
    boxShadow: "none",
    position: "relative",
    "&.MuiPaper-root": {
      overflowY: "visible",
    },
  }));

  return (
    <Dialog
      open={dialogOpen}
      maxWidth="md"
      PaperComponent={DialogPaperBG}
      sx={{ display: { xs: "none", md: "block" } }}
      onClose={() => {
        setDialogOpen(false);
      }}
    >
      <Box>
        <img
          src={paperclip}
          style={{
            position: "absolute",
            height: "25%",
            bottom: "77.2%",
            left: "12%",
          }}
        />

        <IconButton
          onClick={() => {
            setDialogOpen(false);
          }}
          sx={{
            position: "absolute",
            right: "5%",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default StyledDialog;
