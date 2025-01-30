import React, { useContext, useState, useEffect } from "react";
import { CollectionContext } from "../../../context/CollectionContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const ArticleTitle = styled(Typography)(() => ({
  fontFamily: "cheltenham",
  fontSize: "1.4rem",
  marginBottom: "16px",
  marginTop: "20px",
}));

const ApplyButton = styled(Button)(() => ({
  marginBottom: "16px",
  color: "var(--primary)",
  borderColor: "rgba(0, 0, 0, 0.23)",
  // width: "200px",
}));

const CollapseButton = styled(ListItemButton)(() => ({
  borderTop: "1px solid rgba(0, 0, 0, 0.23)",
}));

const Filters = (props) => {
  const { drinkCategoryArr, tagObj, setCurrFilterInfo } =
    useContext(CollectionContext);

  const [colorTags, setColorTags] = useState(null);
  const [shapeTags, setShapeTags] = useState(null);
  const [objectTags, setObjectTags] = useState(null);

  const [colorsOpen, setColorsOpen] = useState(false);
  const [shapesOpen, setShapesOpen] = useState(false);
  const [objectsOpen, setObjectsOpen] = useState(false);

  const [selectedCategory, setSelectedCatergory] = useState();
  const [forTradeFilter, setForTradeFilter] = useState();
  const [checkedFilters, setCheckedFilters] = useState([]);

  const handleCategorySelect = (e) => {
    if (e.target.value === "All") {
      setSelectedCatergory(null);
    } else {
      setSelectedCatergory(e.target.value);
    }
  };

  const handleFilterCheck = (e) => {
    const isChecked = e.target.checked;
    const filter = e.target.value;
    let filtersArr = checkedFilters;

    if (isChecked) {
      setCheckedFilters([...filtersArr, filter]);
    } else {
      setCheckedFilters(filtersArr.filter((f) => f !== filter));
    }
  };

  const applyFilters = () => {
    if (!checkedFilters.length && !selectedCategory && !forTradeFilter) {
      setCurrFilterInfo(null);
    } else {
      const filterInfo = {};
      if (checkedFilters.length) {
        filterInfo.filter = checkedFilters;
      }
      if (selectedCategory) {
        filterInfo.category = selectedCategory;
      }
      if (forTradeFilter) {
        filterInfo.forTrade = forTradeFilter;
      }
      setCurrFilterInfo(filterInfo);
      if (props.setFiltersOpen) props.setFiltersOpen(false);
    }
  };

  useEffect(() => {
    if (tagObj) {
      var colorsArr = [];
      var shapesArr = [];
      var objectsArr = [];

      tagObj.forEach((tag) => {
        if (tag.category === "Color") {
          colorsArr.push(tag);
        }
        if (tag.category === "Shape") {
          shapesArr.push(tag);
        }
        if (tag.category === "Object") {
          objectsArr.push(tag);
        }
      });
      setColorTags(colorsArr);
      setShapeTags(shapesArr);
      setObjectTags(objectsArr);
    }
  }, [tagObj]);

  return (
    <Box
      sx={{
        paddingRight: { xs: "0", md: "20px" },
        borderRight: { xs: "none", md: "var(--thin-border)" },
      }}
    >
      <Stack>
        <ArticleTitle>Filters</ArticleTitle>

        <FormGroup>
          <ApplyButton type="submit" variant="outlined" onClick={applyFilters}>
            Apply
          </ApplyButton>

          <FormControlLabel
            sx={{ marginBottom: "16px" }}
            control={
              <Checkbox
                value={forTradeFilter}
                onChange={() => setForTradeFilter(!forTradeFilter)}
              />
            }
            label="For Trade Only"
          />

          <TextField
            select
            label="Beverage Type"
            defaultValue="All"
            sx={{ marginTop: "9px" }}
            onChange={handleCategorySelect}
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

          <List sx={{ marginTop: "16px" }}>
            <CollapseButton
              onClick={() => {
                setColorsOpen(!colorsOpen);
              }}
            >
              <ListItemText primary="Colors" />
              {colorsOpen ? <ExpandLess /> : <ExpandMore />}
            </CollapseButton>
            <Collapse in={colorsOpen} timeout="auto" unmountOnExit>
              <Box pl={4}>
                <Grid container>
                  {colorTags ? (
                    colorTags.map((colorTag) => (
                      <Grid item key={colorTag.label} xs={6}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              value={colorTag.label}
                              checked={checkedFilters.includes(colorTag.label)}
                              onChange={handleFilterCheck}
                            />
                          }
                          label={colorTag.label}
                        />
                      </Grid>
                    ))
                  ) : (
                    <Box />
                  )}
                </Grid>
              </Box>
            </Collapse>

            <CollapseButton
              onClick={() => {
                setShapesOpen(!shapesOpen);
              }}
            >
              <ListItemText primary="Shapes" />
              {shapesOpen ? <ExpandLess /> : <ExpandMore />}
            </CollapseButton>
            <Collapse in={shapesOpen} timeout="auto" unmountOnExit>
              <Box pl={4}>
                <Grid container>
                  {shapeTags ? (
                    shapeTags.map((shapeTag) => (
                      <Grid item xs={6} key={shapeTag.label}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              value={shapeTag.label}
                              checked={checkedFilters.includes(shapeTag.label)}
                              onChange={handleFilterCheck}
                            />
                          }
                          label={shapeTag.label}
                        />
                      </Grid>
                    ))
                  ) : (
                    <Box />
                  )}
                </Grid>
              </Box>
            </Collapse>

            <CollapseButton
              onClick={() => {
                setObjectsOpen(!objectsOpen);
              }}
            >
              <ListItemText primary="Objects" />
              {objectsOpen ? <ExpandLess /> : <ExpandMore />}
            </CollapseButton>
            <Collapse in={objectsOpen} timeout="auto" unmountOnExit>
              <Box pl={4}>
                <Grid container>
                  {objectTags ? (
                    objectTags.map((objectTag) => (
                      <Grid item xs={6} key={objectTag.label}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              value={objectTag.label}
                              checked={checkedFilters.includes(objectTag.label)}
                              onChange={handleFilterCheck}
                            />
                          }
                          label={objectTag.label}
                        />
                      </Grid>
                    ))
                  ) : (
                    <Box />
                  )}
                </Grid>
              </Box>
            </Collapse>
          </List>

          <ApplyButton type="submit" variant="outlined" onClick={applyFilters}>
            Apply
          </ApplyButton>
        </FormGroup>
      </Stack>
    </Box>
  );
};

export default Filters;
