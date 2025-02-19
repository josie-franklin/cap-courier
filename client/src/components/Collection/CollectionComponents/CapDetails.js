import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import {
  saturation,
  contrast,
  brightness,
} from "@cloudinary/url-gen/actions/adjust";

const StyledContainer = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  [theme.breakpoints.up("md")]: {
    marginTop: "0",
    minWidth: "450px",
  },
}));

const DialogImageContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  float: "left",
  marginRight: "20px",
  [theme.breakpoints.up("sm")]: {
    width: "30%",
  },
  [theme.breakpoints.up("md")]: {
    width: "45%",
  },
  // [theme.breakpoints.up("xl")]: {
  //   width: "20%",
  // },
}));

const ImageLabel = styled(Typography)(() => ({
  fontFamily: "Georgia, serif",
  textAlign: "right",
  fontSize: ".8rem",
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
  lineHeight: "2"
}));

const EditButton = styled(Button)(() => ({
  marginTop: "16px",
  color: "var(--primary)",
  borderColor: "rgba(0, 0, 0, 0.23)",
}));

const CapDetails = (props) => {
  const { isAuthenticated } = useAuth0();

  const { currentCap } = props;

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

  return (
    <StyledContainer container>
      <DialogImageContainer>
        <AdvancedImage
          cldImg={getImage(currentCap.image)}
          style={{ width: "100%" }}
        />
        <ImageLabel>#{currentCap.id}</ImageLabel>
      </DialogImageContainer>

      <ArticleTitle>{currentCap.brand}</ArticleTitle>
      <ArticleSubTitle>
        {currentCap ? currentCap.flavor.toUpperCase() : ""}
      </ArticleSubTitle>

      <Stack direction="row" sx={{ marginTop: "20px", justifyContent: "space-between" }}>
        <ArticleContent sx={{ width: "50%" }}>Category:</ArticleContent>
        <ArticleContent>{currentCap.category}</ArticleContent>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <ArticleContent sx={{ width: "50%" }}>Location:</ArticleContent>
        <ArticleContent>{currentCap.location}</ArticleContent>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <ArticleContent sx={{ width: "50%" }}>Date:</ArticleContent>
        <ArticleContent>{currentCap.date}</ArticleContent>
      </Stack>
      {currentCap.text && (
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
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

      {isAuthenticated && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <EditButton
            sx={{ width: "100%" }}
            variant="outlined"
          >
            Edit
          </EditButton>
        </Box>
      )}
    </StyledContainer>
  );
};

export default CapDetails;
