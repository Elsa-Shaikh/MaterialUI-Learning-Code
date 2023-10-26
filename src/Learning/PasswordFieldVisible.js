import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Paper, TextField } from "@mui/material";

const PasswordFieldVisible = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

const handleChange = (e) => {
  setPassword(e.target.value);
};
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
  <Paper sx={{ width: "400px", padding: "12px" }}>
      <form>
        {showPassword ? (
          <TextField
            type="text"
            label="Password"
            value={password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    <VisibilityIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ) : (
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    <VisibilityOffIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      </form>
    </Paper>

    </>
  );
};

export default PasswordFieldVisible;
