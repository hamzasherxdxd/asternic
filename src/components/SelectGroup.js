import React, { useState } from "react";
import NavBar from "./Nav";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AvailableGroup from "./AvailableGroup";
import { Typography } from "@mui/material";

function SelectGroup() {
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <Box>
        <Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="Select"
                onChange={handleChange}
              >
                <MenuItem value={"Queue"}>Queue</MenuItem>
                <MenuItem value={"Group"}>Group</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={10}>
            <AvailableGroup />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default SelectGroup;
