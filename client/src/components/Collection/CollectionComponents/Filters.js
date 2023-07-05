import React, { useContext, useState, useEffect } from "react";
import { CollectionContext } from "../../../context/CollectionContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const ArticleTitle = styled(Typography)(() => ({
  fontFamily: "cheltenham",
  fontSize: "1.4rem",
  marginBottom: "16px",
  marginTop: "20px",
}));

const Filters = () => {
  const { drinkCategoryArr, tagObj } = useContext(CollectionContext);

  const [colorTags, setColorTags] = useState(null);
  const [shapeTags, setShapeTags] = useState(null);
  const [objectTags, setObjectTags] = useState(null);

  useEffect(() => {
    if (tagObj) {
      var colorsArr = [];
      var shapesArr = [];
      var objectsArr = [];

      tagObj.forEach((tag) => {
        if (tag.category == "Color") {
          colorsArr.push(tag);
        }
        if (tag.category == "Shape") {
          shapesArr.push(tag);
        }
        if (tag.category == "Object") {
          objectsArr.push(tag);
        }
      });
      setColorTags(colorsArr);
      setShapeTags(shapesArr);
      setObjectTags(objectsArr);
      console.log(colorsArr);
    }
  }, [tagObj]);

  return (
    <Box
      sx={{
        marginTop: "20px",
        paddingRight: "20px",
        borderRight: "var(--thin-border)",
      }}
    >
      <Stack>
        <ArticleTitle>Filters</ArticleTitle>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="For Trade" />

          <TextField
            select
            label="Beverage Type"
            defaultValue="All"
            sx={{ marginTop: "9px" }}
          >
            <MenuItem key="All" value="All">
              All
            </MenuItem>
            {drinkCategoryArr.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <TextField select label="" defaultValue="1" sx={{ marginTop: "9px" }}>
            <MenuItem key="1" value="1">
              ---
            </MenuItem>
          </TextField>

          <TextField select label="" defaultValue="1" sx={{ marginTop: "9px" }}>
            <MenuItem key="1" value="1">
              ---
            </MenuItem>
          </TextField>

          <Grid container>
            {colorTags ? (
              colorTags.map((colorTag) => (
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={colorTag.label}
                  />
                </Grid>
              ))
            ) : (
              <Box />
            )}
          </Grid>

          <Grid container>
            {shapeTags ? (
              shapeTags.map((shapeTag) => (
                <Grid item xs={6}>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={shapeTag.label}
                  />
                </Grid>
              ))
            ) : (
              <Box />
            )}
          </Grid>

          <Grid container>
            {objectTags ? (
              objectTags.map((objectTag) => (
                <Grid item xs={6}>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={objectTag.label}
                  />
                </Grid>
              ))
            ) : (
              <Box />
            )}
          </Grid>
        </FormGroup>
      </Stack>
    </Box>
  );
};

export default Filters;
