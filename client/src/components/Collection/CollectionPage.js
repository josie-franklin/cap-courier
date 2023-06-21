import React, {useContext, useEffect } from "react";
import { CollectionContext } from "../../context/CollectionContext";
import SearchResults from "./SearchResults";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const SearchBar = styled(TextField)(() => ({
  width: "100%",
}));

const CollectionPage = () => {
  const { getAllBottlecaps } = useContext(CollectionContext);

  useEffect(() => {
      getAllBottlecaps();
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, margin: "24px 40px 0" }}>
      <Box sx={{ margin: "0 20px" }}>
        <SearchBar
          variant="outlined"
          type="search"
          label="Search for a bottle cap."
        />
      </Box>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 20px 0",
        }}
      >
        <TextField select sx={{ width: "15%" }} />
        <TextField select sx={{ width: "15%" }} />
        <TextField select sx={{ width: "15%" }} />
        <TextField select sx={{ width: "15%" }} />
        <TextField select sx={{ width: "15%" }} />
      </Stack>

      <SearchResults />

    </Box>
  );
};

export default CollectionPage;
