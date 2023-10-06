import {
  Box,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Stack,
  Slider,
} from "@mui/material";
import React, { useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import PublicIcon from "@mui/icons-material/Public";
import CropIcon from "@mui/icons-material/Crop";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Cropper from "react-easy-crop";
import getCroppedImg from "./getCroppedImg"; // Implement this function (see below)
import Koala from "./ProfileImage/Koala.jpg";

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}


const HoverEffect = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imageSrc, setImageSrc] = useState(null); // Store the image source separately
  const inputRef = useRef(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);

  const handleMouseEnter = (e) => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);  
  };

  // const onCropComplete = (croppedArea, croppedAreaPixels) => {
  //   console.log(croppedArea, croppedAreaPixels)
  // }
  
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   if (file) {
  //     setImageSrc(URL.createObjectURL(file)); // Set the image source directly
  //     setOpen(true);
  //   }
  // };

  const handleImageChange = async(e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl)
      setOpen(true);
    }

  };

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleZoomChange = (newZoom) => {
    setZoom(Math.min(Math.max(newZoom, 1), 3));
  };
  

  const handleCrop = async () => {
    try {
      const croppedImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels);
      console.log("croppedImageUrl:", {croppedImageUrl});
      setCroppedImageUrl(croppedImageUrl);
    } catch (error) {
      console.error("Error cropping image:", error);
    }
 
  };

  const handleSaveAvatar = () => {
    handleCrop();
    setOpen(false); // Close modal after cropping
  };

  const handleZoomIn = () => {
    setZoom((prevValue) => Math.min(prevValue + 0.1, 3));
  
  };
  
  const handleZoomOut = () => {
    setZoom((prevValue) => Math.max(prevValue - 0.1, 1));
  };
  
  
  return (
    <>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleImageClick}
        m={20}
        border={"1px solid red"}
        width={60}
        textAlign={"center"}
        sx={{ cursor: "pointer", position: "relative" }}
      >
        <Avatar
          variant="square"
          sx={{
            width: 60,
            height: 60,
          }}
          src={croppedImageUrl || Koala}
        />

        <EditIcon
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            opacity: 0.8,
            display: `${hover ? "" : "none"}`,
          }}
        />
      </Box>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
        accept="image/*"
      />

      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">Edit Picture</DialogTitle>
        <DialogContent sx={{ width: "520px", overflowY: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                width: 364,
                height: 364,
                mb: 5,
              }}
            >
              {imageSrc && (
                <Cropper
                  cropShape="round"
                  showGrid={false}
                  image={imageSrc} // Use the separate image source state
                  crop={crop}
                  zoom={zoom}
                  aspect={364 / 364} // Set the aspect ratio to 364x364
                  onCropChange={handleCropChange}
                  onZoomChange={handleZoomChange}
                  onCropComplete={onCropComplete}
                />
              )}
            </Avatar>
            <Box sx={{ width: 300 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <RemoveIcon onClick={handleZoomOut} sx={{ cursor: "pointer" }} />
                <Slider
                  aria-label="Zoom"
                  value={zoom}
                  onChange={(e, value) => setZoom(value)}
                />
                <AddIcon sx={{ cursor: "pointer" }} onClick={handleZoomIn}/>
              </Stack>
            </Box>

            <Stack spacing={2} direction={"row"} m={5}>
              <Button
                variant="contained"
                sx={{ color: "black", bgcolor: "rgb(228,230,235)" }}
                startIcon={<CropIcon />}
              >
                {" "}
                Crop Photo
              </Button>
              <Button
                variant="contained"
                sx={{ color: "black", bgcolor: "rgb(228,230,235)" }}
                startIcon={<AccessTimeFilledIcon />}
              >
                Make Temporary
              </Button>
            </Stack>
          </Box>
          <DialogContentText id="dialog-description">
            <Stack spacing={2} direction={"row"}>
              <PublicIcon />
              <Typography>Your profile picture is public.</Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveAvatar}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HoverEffect;
