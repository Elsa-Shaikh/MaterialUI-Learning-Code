import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

const SliderRange = () => {
    const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleVolumeUpClick = () => {
    setValue((prevValue) => Math.min(prevValue + 10, 100));
  };

  const handleVolumeDownClick = () => {
    setValue((prevValue) => Math.max(prevValue - 10, 0));
  };


  return (
    <>
  <Box sx={{ width: 300 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown onClick={handleVolumeDownClick}/>
        <Slider color='warning' sx={{bgcolor:'black'}} aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp onClick={handleVolumeUpClick}/>
      </Stack>
    </Box>
    </>
  )
}

export default SliderRange