import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";

function SelectDate() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography variant="h6">Start Date</Typography>
      <DatePicker onChange={(newValue) => setValue(newValue)} />
      <Typography variant="h6">End Date</Typography>
      <DatePicker onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
}

export default SelectDate;
