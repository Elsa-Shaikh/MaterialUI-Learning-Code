import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Paper, Tab } from "@mui/material";
import React, { useState } from "react";
import SigninPage from "./SigninPage";
import LoginPage from "./LoginPage";

const FormTab = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper
        elevation={20}
        sx={{
          width: "400px",
          margin: "20px auto",
        }}
      >
        <TabContext value={value}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            centered
          >
            <Tab label="Sign In" value="1" />
            <Tab label="Sign Up" value="2" />
          </TabList>
          <TabPanel value="1">
            <SigninPage />
          </TabPanel>
          <TabPanel value="2">
            <LoginPage />
          </TabPanel>
        </TabContext>
      </Paper>
    </>
  );
};

export default FormTab;
