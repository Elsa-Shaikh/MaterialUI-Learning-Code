import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

const LoginPage = () => {
  const [signup, setSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  const resetState = () => {
    setSignup(!signup);
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={3}
          bgcolor={"white"}
          borderRadius={5}
          boxShadow={"5px 5px 10px black"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px black",
            },
          }}
        >
          <Typography variant="h3" padding={3} textAlign={"center"}>
            {signup ? "SignUp" : "Login"}
          </Typography>
          {signup && (
            <TextField
              onChange={handleChange}
              name="name"
              value={input.name}
              variant="outlined"
              placeholder="Name"
              type="text"
              margin="normal"
            />
          )}
          <TextField
            onChange={handleChange}
            name="email"
            value={input.email}
            variant="outlined"
            placeholder="Email"
            type="email"
            margin="normal"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={input.password}
            variant="outlined"
            placeholder="Password"
            type="password"
            margin="normal"
          />
          <Button
            endIcon={signup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />}
            type="submit"
            variant="contained"
            color="warning"
            sx={{
              marginTop: 3,
              borderRadius: 3,
            }}
          >
            {signup ? "SignUp" : "Login"}
          </Button>
          <Button
            endIcon={signup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />}
            onClick={resetState}
            sx={{
              marginTop: 3,
              borderRadius: 3,
            }}
          >
            Change to {signup ? "Login" : "SignUp"}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default LoginPage;
