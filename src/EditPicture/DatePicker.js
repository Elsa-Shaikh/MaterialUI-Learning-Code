import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

const DatePicker = () => {
  const [value, setValue] = useState([null, null]);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box width="250px" sx={{ m: "20px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Date</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="DatePicker">
                <DemoContainer
                  components={["DateRangePicker"]}
                  sx={{ width: "200px" }}
                >
                  <label>This Month </label>
                  <DateRangePicker
                    localeText={{ start: "Start Date", end: "End Date" }}
                    sx={{ m: "20px" }}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                      console.log(newValue);
                    }}
                  />
                </DemoContainer>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
