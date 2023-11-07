import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import rippedPaper from "../../../images/rippedpapertextured.PNG";
import paperclip from "../../../images/paperclip2.png";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import {
  saturation,
  contrast,
  brightness,
} from "@cloudinary/url-gen/actions/adjust";

const DialogImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingRight: "20px",
  [theme.breakpoints.down("md")]: {
    width: "50%",
    // padding: "0 0 0 50px",
  },
}));

const ImageLabel = styled(Typography)(() => ({
  fontFamily: "Georgia, serif",
  textAlign: "right",
  fontSize: ".8rem",
}));

const ArticleContainer = styled(Box)(({ theme }) => ({
  borderLeft: "var(--thin-border)",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    borderLeft: "none",
    // borderTop: "var(--thin-border)",
  },
}));

const ArticleTitle = styled(Typography)(() => ({
  fontFamily: "cheltenham",
  fontSize: "1.4rem",
  paddingLeft: "20px",
}));

const ArticleSubTitle = styled(Typography)(() => ({
  fontFamily: "helvetica",
  letterSpacing: ".06rem",
  fontSize: "0.75rem",
  paddingLeft: "20px",
  marginTop: "-0.2rem",
}));

const ArticleContent = styled(Typography)(() => ({
  fontFamily: "imperial",
  fontSize: "0.9rem",
}));

const EditButton = styled(Button)(() => ({
  marginTop: "16px",
  color: "var(--primary)",
  borderColor: "rgba(0, 0, 0, 0.23)",
}));

const CapDetails = (props) => {
  const { isAuthenticated } = useAuth0();

  const { currentCap } = props;

  const [editMode, setEditMode] = useState(false);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "hdvrmdbma",
    },
  });

  const getImage = (image) => {
    const capImg = cld.image(image);
    capImg.resize(fill().width(250).height(250));
    capImg
      //.adjust(saturation().level(-1))
      .adjust(contrast().level(-40))
      .adjust(brightness().level(20));
    return capImg;
  };

  const updateCap = () => {
    console.log(currentCap);
    setEditMode(false);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <DialogImageContainer>
          <AdvancedImage
            cldImg={getImage(currentCap.image)}
            style={{ width: "100%" }}
          />
          <ImageLabel>#{currentCap.id}</ImageLabel>
        </DialogImageContainer>
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
        <ArticleContainer>
          <Stack>
            <ArticleTitle>{currentCap.brand}</ArticleTitle>
            <ArticleSubTitle>
              {currentCap ? currentCap.flavor.toUpperCase() : ""}
            </ArticleSubTitle>
          </Stack>
          <Stack sx={{ marginTop: "16px", paddingLeft: "20px" }}>
            <Stack direction="row">
              <ArticleContent sx={{ width: "50%" }}>Category:</ArticleContent>
              <ArticleContent>{currentCap.category}</ArticleContent>
            </Stack>
            <Stack direction="row">
              <ArticleContent sx={{ width: "50%" }}>Location:</ArticleContent>
              <ArticleContent>{currentCap.location}</ArticleContent>
            </Stack>
            <Stack direction="row">
              <ArticleContent sx={{ width: "50%" }}>Date:</ArticleContent>
              <ArticleContent>{currentCap.date}</ArticleContent>
            </Stack>
            {currentCap.text && (
              <Stack direction="row">
                <ArticleContent sx={{ width: "50%" }}>Text:</ArticleContent>
                <ArticleContent>{currentCap.text}</ArticleContent>
              </Stack>
            )}
            {currentCap.count > 1 && (
              <Stack direction="row">
                <ArticleContent sx={{ marginTop: "16px" }}>
                  Available for trade
                </ArticleContent>
              </Stack>
            )}
            {currentCap.note && (
              <ArticleContent sx={{ marginTop: "16px" }}>
                {currentCap.note}
              </ArticleContent>
            )}
          </Stack>
        </ArticleContainer>
      </Grid>
      {isAuthenticated && (
        <Grid item xs={12} order={{ xs: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {!editMode && (
              <EditButton
                sx={{ width: "100%" }}
                onClick={() => {
                  setEditMode(true);
                }}
                flavor="outlined"
              >
                Edit
              </EditButton>
            )}

            {editMode && (
              <EditButton
                sx={{ width: "100%" }}
                flavor="outlined"
                onClick={() => {updateCap()}}
              >
                Save
              </EditButton>
            )}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default CapDetails;
