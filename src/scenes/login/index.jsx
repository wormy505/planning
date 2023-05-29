import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FilledInput,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
  useTheme,
} from "@mui/material"
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material"
import { tokens } from "../../theme"
import Header from "../../components/Header"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

const Login = ({ onLogin }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleLogin = () => {
    const isValidEmail = validateEmail(email)
    const isValidPassword = validatePassword(password)

    if (isValidEmail && isValidPassword) {
      onLogin(true) // Set authentication to true
    }
  }

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked)
    // Save the rememberMe value to local storage or any other storage mechanism
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/
    return passwordRegex.test(password)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setEmailError(!validateEmail(event.target.value))
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    setPasswordError(!validatePassword(event.target.value))
  }

  return (
    <Box m="20px">
      <Header title="Sign In" subtitle="Please enter your credentials" />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography>
              <LockOutlinedIcon sx={{ marginRight: "8px" }} />
              <Typography variant="h4" component="span">
                Sign-in
              </Typography>
            </Typography>
          </Box>
          {/* Email Input */}
          <Box>
            <FormControl sx={{ m: "20px", width: "400px" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
              <FilledInput
                id="filled-adornment-email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                required
              />
            </FormControl>
          </Box>
          {/* Password Input */}
          <Box>
            <FormControl sx={{ m: "20px", width: "400px" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                required
                inputProps={{
                  pattern: "^(?=.*[A-Z])(?=.*\\d).{6,}$",
                  title:
                    "Password should have minimum 6 characters and 1 capital letter",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          {/* Checkbox and Register Link */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              sx={{ m: "20px" }}
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  color="default"
                />
              }
              label="Remember me"
            />

            <Typography
              variant="body2"
              component="span"
              sx={{
                fontSize: "inherit",
                color: colors.greenAccent[400],
                textDecoration: "none",
                marginRight: "25px",
              }}
            >
              <Link
                to="/register"
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                }}
              >
                No account? Register here
              </Link>
            </Typography>
          </Box>

          {/* Login Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "400px",
              backgroundColor: colors.blueAccent[700],
              m: "20px",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
