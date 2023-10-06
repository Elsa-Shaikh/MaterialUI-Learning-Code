import {
  Masonry,
  TabContext,
  TabList,
  TabPanel,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Paper,
  Tab,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FavorateIcon from "@mui/icons-material/Favorite";
import ExpandMore from "@mui/icons-material/ExpandMore";

const TabComp = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box m="20px">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
            <TabList
              aria-label="Tabs example"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              // centered
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab
                label="Tab One"
                value="1"
                icon={<FavorateIcon />}
                iconPosition="start"
              />
              <Tab label="Tab Two" value="2" disabled />
              <Tab label="Tab Three" value="3" />
              <Tab label="Tab Four" value="4" />
              <Tab label="Tab Five" value="5" />
              <Tab label="Tab Six" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1">Panel 1</TabPanel>
          <TabPanel value="2">Panel 2</TabPanel>
          <TabPanel value="3">Panel 3</TabPanel>
          <TabPanel value="4">Panel 4</TabPanel>
          <TabPanel value="5">Panel 5</TabPanel>
          <TabPanel value="6">Panel 6</TabPanel>
        </TabContext>
      </Box>
      <Divider />
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City B</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>City C</TimelineContent>
        </TimelineItem>
      </Timeline>
      <Divider />
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => {
            return (
              <Paper
                key={index}
                sx={{
                  // display:'flex',
                  // justifyContent:'center',
                  // alignItems:'center',
                  // height,
                  border: "1px solid ",
                }}
              >
                {/* {
                            index+1
                        } */}
                <Accordion sx={{ minHeight: height }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Accordion {index + 1}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>Content</AccordionDetails>
                </Accordion>
              </Paper>
            );
          })}
        </Masonry>
      </Box>
    </>
  );
};
const heights = [
  150, 30, 90, 70, 110, 150, 130, 50, 80, 90, 100, 150, 30, 50, 80,
];
export default TabComp;
