import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LockResetIcon from "@mui/icons-material/LockReset";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const SigninPage = () => {
  return (
    <>
      <Grid>
        <Paper
          elevation={10}
          sx={{
            p: "20px",
            height: "70vh",
            width: "300px",
            m: "20px auto",
          }}
        >
          <Grid m={2}>
            <Avatar sx={{ bgcolor: "warning.light" }}>
              {" "}
              <LockOutlinedIcon />{" "}
            </Avatar>
            <Typography variant="h6" paddingTop={2}>
              Sign In
            </Typography>
          </Grid>
          <Stack spacing={2} direction={"column"} sx={{ marginBottom: "20px" }}>
            <TextField
              label="Email"
              placeholder="Enter a Email"
              fullWidth
              required
              type="email"
            />
            <TextField
              label="Password"
              placeholder="Enter a Password"
              fullWidth
              required
              type="password"
            />
            <FormControlLabel
              label="Remember Me"
              control={<Checkbox name="checkremember" color="primary" />}
            />
            <Button type="submit" color="warning" fullWidth variant="contained">
              Sign In
            </Button>
          </Stack>
          <Stack spacing={1} direction={"column"} sx={{ alignItems: "center" }}>
            <Typography>
              <Link href="#" fontWeight={"bold"}>
                Forget Password?
              </Link>
            </Typography>
            <Typography sx>
              Don't have an account?{" "}
              <Link href="#" fontWeight={"bold"}>
                SignUp
              </Link>
            </Typography>
          </Stack>
        </Paper>
        <Paper
          elevation={10}
          sx={{
            p: "20px",
            height: "70vh",
            width: "300px",
            m: "20px auto",
          }}
        >
          <Grid m={2}>
            <Avatar sx={{ bgcolor: "error.light" }}>
              {" "}
              <AccountCircleIcon />{" "}
            </Avatar>
            <Typography variant="h6" paddingTop={2}>
              Sign Up
            </Typography>
          </Grid>
          <Stack spacing={2} direction={"column"} sx={{ marginBottom: "20px" }}>
            <TextField
              label="Full Name"
              placeholder="Enter a Full Name"
              fullWidth
              required
            />
            <TextField
              label="Email"
              placeholder="Enter a Email"
              fullWidth
              required
              type="email"
            />
            <TextField
              label="Phone Number"
              placeholder="Enter a Phone Number"
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter a Password"
              fullWidth
              required
              type="password"
            />
            <Button type="submit" color="error" fullWidth variant="contained">
              Sign Up
            </Button>
          </Stack>
          <Stack spacing={1} direction={"column"} sx={{ alignItems: "center" }}>
            <Typography sx>
              Don't have an account?{" "}
              <Link href="#" fontWeight={"bold"}>
                SignIn
              </Link>
            </Typography>
          </Stack>
        </Paper>
        <Paper
          elevation={10}
          sx={{
            p: "20px",
            height: "50vh",
            width: "300px",
            m: "20px auto",
          }}
        >
          <Grid m={2}>
            <Avatar sx={{ bgcolor: "success.light" }}>
              {" "}
              <MarkEmailReadIcon />{" "}
            </Avatar>
            <Typography variant="h6" paddingTop={2} marginBottom={5}>
              Forget Password?
            </Typography>
          </Grid>
          <Stack spacing={2} direction={"column"} sx={{ marginBottom: "20px" }}>
            <Typography sx={{ textAlign: "center" }}>
              Enter Your Valid Email Address
            </Typography>
            <TextField
              label="Email"
              placeholder="Enter a Email"
              fullWidth
              required
              type="email"
            />
            <Button type="submit" color="success" fullWidth variant="contained">
              Send
            </Button>
          </Stack>
        </Paper>
        <Paper
          elevation={10}
          sx={{
            p: "20px",
            height: "50vh",
            width: "300px",
            m: "20px auto",
          }}
        >
          <Grid m={2}>
            <Avatar sx={{ bgcolor: "info.light" }}>
              {" "}
              <LockResetIcon />{" "}
            </Avatar>
            <Typography variant="h6" paddingTop={2} marginBottom={5}>
              Reset Password
            </Typography>
          </Grid>
          <Stack spacing={2} direction={"column"} sx={{ marginBottom: "20px" }}>
            <TextField
              label="New Password"
              placeholder="Enter a New Password"
              fullWidth
              required
              type="password"
            />
            <TextField
              label="Confirm Password"
              placeholder="Enter a Confirm Password"
              fullWidth
              required
              type="password"
            />
            <Button type="submit" color="info" fullWidth variant="contained">
              Reset
            </Button>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
};

export default SigninPage;
