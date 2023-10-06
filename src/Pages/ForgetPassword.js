import React from "react";
import bgImg from "./bg/bg.jpg";
import bgImg2 from "./bg/bg2.svg";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
// import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ForgetPassword = () => {
  // const navigate = useNavigate();

  return (
    <>
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
              {/* #3b33d5 */}
              <Box
                bgcolor="info.dark"
                minHeight={"500px"}
                height={"70vh"}
                backgroundSize="cover"
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
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
                        Reset Password
                      </Typography>
                    </Box>
                    <Stack spacing={3} direction={"column"} p={3}>
                      <TextField
                        label="Enter Your Valid Email Address"
                        variant="outlined"
                        type="email"
                        required
                        autoComplete="email"
                        fullWidth
                      />
                    </Stack>
                    <Stack
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Button
                        variant="contained"
                        // onClick={()=>{
                        //     navigate('/formtab');
                        // }}
                        color="warning"
                        sx={{
                          borderRadius: "50px",
                          height: "45px",
                          width: "400px",
                        }}
                      >
                        {" "}
                        Send Reset Link
                      </Button>
                    </Stack>
                    <Stack p={3}>
                      <Typography sx={{ color: "white" }}>
                        Login to your Account.{" "}
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

export default ForgetPassword;
