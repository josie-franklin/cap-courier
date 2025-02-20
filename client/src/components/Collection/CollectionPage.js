import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CollectionContext } from "../../context/CollectionContext";
import SearchResults from "./CollectionComponents/SearchResults";
import SearchBar from "./CollectionComponents/SearchBar";
import StyledDrawer from "../resuable/StyledDrawer";
import Filters from "./CollectionComponents/Filters";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import AddIcon from "@mui/icons-material/Add";

const StyledButton = styled(IconButton)(() => ({
  border: "1px solid rgba(0, 0, 0, 0.23)",
  margin: "0 0 0 20px",
  borderRadius: "4px",
  height: "100%",
}));

const FilterButton = styled(StyledButton)(({ theme }) => ({
  display: "none",
  margin: "0",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
}));

const CollectionPage = () => {
  const { isAuthenticated } = useAuth0();
  const { getAllTags } = useContext(CollectionContext);

  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, marginTop: "24px" }}>
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
              {isAuthenticated && (
                <Grid item xs="auto">
                  <StyledButton>
                    <AddIcon />
                  </StyledButton>
                </Grid>
              )}
            </Grid>
            <SearchResults />
          </Grid>
        </Grid>
      </Box>

      <StyledDrawer
        drawerOpen={filtersOpen}
        setDrawerOpen={setFiltersOpen}
        content={<Filters setFiltersOpen={setFiltersOpen}/>}
      />
    </Box>
  );
};

export default CollectionPage;
