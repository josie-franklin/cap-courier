import React, { useContext, useState, useEffect } from "react";
import { CollectionContext } from "../../context/CollectionContext";
import SearchResults from "./CollectionComponents/SearchResults";
import SearchBar from "./CollectionComponents/SearchBar";
import Filters from "./CollectionComponents/Filters";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import Drawer from "@mui/material/Drawer";

const FilterButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  display: "none",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: "4px",
}));

const CollectionPage = () => {
  const { getAllTags } = useContext(CollectionContext);

  const [filtersOpen, setFiltersOpen] = useState();

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, margin: "24px 40px 0" }}>
      <Box sx={{ margin: "0 20px" }}>
        <Grid container>
          <Grid
            item
            sx={{ display: { xs: "none", md: "block" } }}
            md={3}
            xl={2}
          >
            <Filters />
          </Grid>
          <Grid item xs={12} md={9} xl={10}>
            <Grid container>
              <Grid item xs>
                <SearchBar />
              </Grid>
              <Grid item xs="auto">
                <FilterButton
                  onClick={() => {
                    setFiltersOpen(true);
                  }}
                >
                  <TuneIcon />
                </FilterButton>
              </Grid>
            </Grid>
            <SearchResults />
          </Grid>
        </Grid>
      </Box>

      <Drawer
        anchor="bottom"
        open={filtersOpen}
        onClose={() => {
          setFiltersOpen(false);
        }}
      >
        <Box sx={{ padding: "20px", height: "85vh" }}>
          <Filters />
        </Box>
      </Drawer>
    </Box>
  );
};

export default CollectionPage;
