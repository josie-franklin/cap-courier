import React, { useContext, useState, useEffect } from "react";
import { CollectionContext } from "../../context/CollectionContext";
import SearchResults from "./SearchResults";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";

const SearchBar = styled(Box)(() => ({
  margin: "0 20px",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: "4px",
  padding: "2px 12px 0 12px",
}));

const CollectionPage = () => {
  const { getAllTags, getAllBottlecaps, searchBottlecaps } =
    useContext(CollectionContext);

  const [searchInput, setSearchInput] = useState();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchInput(newValue);
  };

  const handleSubmit = () => {
    console.log(searchInput);
    const sendInput = searchInput.trim()
    if (!sendInput) {
      getAllBottlecaps();
    } else {
      const sendData = {
        search: sendInput,
      };
      searchBottlecaps(sendData);
    }
  };

  useEffect(() => {
    getAllTags();
    getAllBottlecaps();
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, margin: "24px 40px 0" }}>
      <SearchBar>
        <Stack direction="row">
          <Input
            disableUnderline={true}
            fullWidth
            variant="standard"
            label="Search for a bottle cap."
            value={searchInput || ""}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <IconButton onClick={handleSubmit}>
            <SearchIcon />
          </IconButton>
        </Stack>
      </SearchBar>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 20px 0",
        }}
      >
        <TextField select defaultValue="1" sx={{ width: "15%" }}>
          <MenuItem key="1" value="1">
            Placeholder
          </MenuItem>
        </TextField>
        <TextField select defaultValue="1" sx={{ width: "15%" }}>
          <MenuItem key="1" value="1">
            Placeholder
          </MenuItem>
        </TextField>
        <TextField select defaultValue="1" sx={{ width: "15%" }}>
          <MenuItem key="1" value="1">
            Placeholder
          </MenuItem>
        </TextField>
        <TextField select defaultValue="1" sx={{ width: "15%" }}>
          <MenuItem key="1" value="1">
            Placeholder
          </MenuItem>
        </TextField>
        <TextField select defaultValue="1" sx={{ width: "15%" }}>
          <MenuItem key="1" value="1">
            Placeholder
          </MenuItem>
        </TextField>
      </Stack>

      <SearchResults />
    </Box>
  );
};

export default CollectionPage;
