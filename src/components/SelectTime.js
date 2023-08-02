import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Typography } from "@mui/material";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function SelectTime() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography variant="h6">From</Typography>
      <TimePicker onChange={(newValue) => setValue(newValue)} />
      <Typography variant="h6">To</Typography>
      <TimePicker onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
}

export default SelectTime;
