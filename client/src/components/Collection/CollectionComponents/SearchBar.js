import React, { useContext, useState, useEffect } from "react";
import { CollectionContext } from "../../../context/CollectionContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const StyleWrapper = styled(Box)(({ theme }) => ({
  margin: "0 0 0 20px",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: "4px",
  padding: "2px 12px 0 12px",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    margin: "0 20px 0 0",
  },
}));

const SearchBar = () => {
  const { setCurrInput } = useContext(CollectionContext);

  const [searchInput, setSearchInput] = useState();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchInput(newValue);
  };

  const handleSubmit = () => {
    if (searchInput) {
      setCurrInput(searchInput.trim());
    }
  };

  return (
    <StyleWrapper>
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <IconButton onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
      </Stack>
    </StyleWrapper>
  );
};

export default SearchBar;
