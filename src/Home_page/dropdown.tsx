import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React from "react";

export function Dropdown({ resource, setResource }: { resource: string; setResource: (value: string) => void }) {

  const handleChange = (event: SelectChangeEvent) => {
    setResource(event.target.value);
  };
  return (
    <React.Fragment>
      <div>
        <Select
          labelId="Categories"
          id="demo-simple-select-helper"
          value={resource}
          label="Categories"
          onChange={handleChange}
          sx={{
            background:'#344560',
            color: '#e6e8e6',
          }}
        >
          <MenuItem value={"movie/popular"}>Popular</MenuItem>
          <MenuItem value={"movie/top_rated"}>Top Rated</MenuItem>
        </Select>
      </div>
    </React.Fragment>
  );
}
