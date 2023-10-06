import React, { forwardRef, useState } from "react";
import bgImg from "./bg/bg.jpg";
import bgImg2 from "./bg/bg2.svg";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Register = () => {
  const vertical = "top";
  const horizontal = "right";
  const [open, setOpen] = useState(false);

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }
  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);
  };

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{
            width: "100%",
          }}
        >
          {" "}
          Failed! Enter Correct Username and Password.
        </Alert>
      </Snackbar>

      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "75%",
            height: "70%",
            bgcolor: "white",
            boxShadow: 24,
          }}
        >
          <Grid container>
            <Grid item xs={17} sm={17} lg={6}>
              <Box
                sx={{
                  backgroundImage: `url(${bgImg2})`,
                  backgroundSize: "cover",
                  height: "61vh",
                  marginRight: "15px",
                  marginLeft: "15px",
                  marginTop: "40px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={17} sm={17} lg={6}>
              <Box
                bgcolor="info.dark"
                minHeight={"500px"}
                height={"70vh"}
                backgroundSize="cover"
              >
                <ThemeProvider theme={darkTheme}>
                  <Container
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <Box height={35} />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar sx={{ bgcolor: "white" }}>
                        {" "}
                        <LockOutlinedIcon />{" "}
                      </Avatar>
                      <Typography
                        variant="h4"
                        component={"h1"}
                        sx={{ color: "white" }}
                      >
                        Create an Account
                      </Typography>
                    </Box>
                    <Stack spacing={3} direction={"column"} p={3}>
                      <TextField
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        required
                        autoComplete="email"
                        fullWidth
                      />
                      <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
                        autoComplete="password"
                        fullWidth
                      />
                      <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        required
                        autoComplete="confirm password"
                        fullWidth
                      />
                    </Stack>
                    <Stack
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        sx={{
                          borderRadius: "50px",
                          height: "45px",
                          width: "400px",
                        }}
                      >
                        {" "}
                        Register
                      </Button>
                    </Stack>
                    <Stack p={3}>
                      <Typography sx={{ color: "white" }}>
                        Already have an Account?{" "}
                        <Link
                          to={"/"}
                          style={{ color: "grey", textDecoration: "none" }}
                        >
                          Sign In
                        </Link>
                      </Typography>
                    </Stack>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Register;
