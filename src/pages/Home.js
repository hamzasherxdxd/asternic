import React, { useState } from "react";
import NavBar from "../components/Nav";
import SelectGroup from "../components/SelectGroup";
import SelectAgent from "../components/SelectAgent";
import { Box, Button, Grid, Typography } from "@mui/material";
import SelectDate from "../components/SelectDate";
import SelectTime from "../components/SelectTime";

function Home() {
  return (
    <Box>
      <NavBar />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SelectGroup />
          </Grid>
          <Grid item xs={6}>
            <SelectAgent />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={6}>
        <Typography variant="h4">Select Date Range</Typography>
            <SelectDate />
          </Grid>
          <Grid item xs={6}>
        <Typography variant="h4">Select Time Frame</Typography>
            <SelectTime />
          </Grid>
        </Grid>
        <br/>
        <Button variant="contained">Display Report</Button>
      </Box>
    </Box>
  );
}

export default Home;
