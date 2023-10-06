import React, { useState } from "react";
import bgImg from "./bg/bg.jpg";
import bgImg2 from "./bg/bg2.svg";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
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

const Login = () => {
  const [check, setCheck] = useState(false);
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
                        Sign In
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
                    </Stack>
                    <Stack
                      px={3}
                      direction={"row"}
                      spacing={3}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <FormControlLabel
                        sx={{ color: "white" }}
                        label="Remember Me"
                        control={
                          <Checkbox
                            checked={check}
                            name="checkremember"
                            color="warning"
                            sx={{ color: "white" }}
                            onClick={() => {
                              setCheck(!check);
                            }}
                          />
                        }
                      />
                      <Link
                        to="/forgetpassword"
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        {" "}
                        Forget Password?
                      </Link>
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
                        Sign In
                      </Button>
                    </Stack>
                    <Stack p={3}>
                      <Typography sx={{ color: "white" }}>
                        Not registered yet?{" "}
                        <Link
                          to={"/register"}
                          style={{ color: "grey", textDecoration: "none" }}
                        >
                          Create an Account
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

export default Login;
