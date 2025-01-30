import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CollectionContext } from "../../../context/CollectionContext";
import CapDetails from "./CapDetails";
import StyledDialog from "../../resuable/StyledDialog";
import StyledDrawer from "../../resuable/StyledDrawer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import {
  saturation,
  contrast,
  brightness,
} from "@cloudinary/url-gen/actions/adjust";

const ResultImageContainer = styled(Box)(() => ({
  width: "100%",
  padding: "20px",
}));

const ImageLabel = styled(Typography)(() => ({
  fontFamily: "Georgia, serif",
  textAlign: "right",
  fontSize: ".8rem",
}));

const SearchResults = () => {
  const { isAuthenticated } = useAuth0();

  const {
    bottlecapObj,
    currFilterInfo,
    currInput,
    getAllBottlecaps,
    searchBottlecaps,
  } = useContext(CollectionContext);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [currentCap, setCurrentCap] = useState(false);

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

  const openDialog = (bottlecap) => {
    setCurrentCap(bottlecap);
    setDetailsOpen(true);
  };

  useEffect(() => {
    if (!currFilterInfo && !currInput) {
      getAllBottlecaps();
    } else {
      const sendData = {
        search: currInput,
        filterInfo: currFilterInfo,
      };
      searchBottlecaps(sendData);
    }
  }, [currFilterInfo, currInput]);

  useEffect(() => {
    // console.log(bottlecapObj);
  }, [bottlecapObj]);

  const results = bottlecapObj.length ? (
    <Grid container>
      {bottlecapObj.map((bottlecap, i) => (
        <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
          <ResultImageContainer
            onClick={() => {
              openDialog(bottlecap);
            }}
          >
            <AdvancedImage
              cldImg={getImage(bottlecap.image)}
              style={{ width: "100%" }}
            />
            <ImageLabel>{bottlecap.brand.toUpperCase()}</ImageLabel>
          </ResultImageContainer>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Box sx={{ padding: "20px" }}>
      <Typography>No bottlecaps match your search.</Typography>
    </Box>
  );

  let contents = !bottlecapObj ? <p>Loading...</p> : results;

  return (
    <Box sx={{ marginTop: "20px", margin: {xs: "20px -20px 0", md: "20px 0 0"} }}>
      {contents}
      <StyledDialog
        dialogOpen={detailsOpen}
        setDialogOpen={setDetailsOpen}
        content={<CapDetails currentCap={currentCap} />}
      />

      <StyledDrawer
        drawerOpen={detailsOpen}
        setDrawerOpen={setDetailsOpen}
        content={<CapDetails currentCap={currentCap} />}
      />
    </Box>
  );
};

export default SearchResults;
