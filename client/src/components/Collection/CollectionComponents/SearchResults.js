import React, { useContext, useState, useEffect } from "react";
import { CollectionContext } from "../../../context/CollectionContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import bottlecapImage from "../../../images/bottlecap.png";
// import bottlecapImageWithBG from "../../../images/bottlecapWithBG.jpg";
import rippedPaper from "../../../images/rippedpapertextured.PNG";
import paperclip from "../../../images/paperclip2.png";

const ResultImageContainer = styled(Box)(() => ({
  width: "100%",
  padding: "20px",
}));

const DialogImageContainer = styled(Box)(() => ({
  width: "100%",
  paddingRight: "20px",
  borderRight: "var(--thin-border)",
}));

const ArticleTitle = styled(Typography)(() => ({
  fontFamily: "cheltenham",
  fontSize: "1.4rem",
  paddingLeft: "20px",
}));

const ArticleContent = styled(Typography)(() => ({
  fontFamily: "imperial",
  marginTop: "16px",
  paddingLeft: "20px",
}));

const ImageLabel = styled(Typography)(() => ({
  fontFamily: "Georgia, serif",
  textAlign: "right",
  fontSize: ".8rem",
}));

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

const SearchResults = () => {
  const { bottlecapObj } = useContext(CollectionContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentCap, setCurrentCap] = useState(false);

  const openDialog = (bottlecap) => {
    setCurrentCap(bottlecap);
    setDialogOpen(true);
  };

  useEffect(() => {}, [bottlecapObj]);

  const results = bottlecapObj ? (
    <Grid container>
      {bottlecapObj.map((bottlecap, i) => (
        <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
          <ResultImageContainer
            onClick={() => {
              openDialog(bottlecap);
            }}
          >
            <img src={bottlecapImage} style={{ width: "100%" }} />
            <ImageLabel>{bottlecap.source.toUpperCase()}</ImageLabel>
          </ResultImageContainer>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Box>There's nothing here.</Box>
  );

  let contents = !bottlecapObj ? <p>Loading...</p> : results;

  return (
    <Box sx={{ marginTop: "20px" }}>
      {contents}

      <Dialog
        open={dialogOpen}
        maxWidth="md"
        PaperComponent={DialogPaperBG}
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
              left: "73%",
            }}
          />
        </Box>
        <DialogContent>
          <Grid container>
            <Grid item xs={6}>
              <DialogImageContainer>
                <img src={bottlecapImage} style={{ width: "100%" }} />
                <ImageLabel>{currentCap.location}</ImageLabel>
              </DialogImageContainer>
            </Grid>
            <Grid item xs={6}>
              <Stack direction="row" justifyContent="space-between">
                <ArticleTitle>{currentCap.source}</ArticleTitle>
                <IconButton
                  onClick={() => {
                    setDialogOpen(false);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Stack>
              <ArticleContent>{currentCap.category}</ArticleContent>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SearchResults;
