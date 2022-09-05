import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { logo } from "../assets/exportimage";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password2: "",
  });

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const onbuttonauth = () => {
    signInWithEmailAndPassword(auth, state.email, state.password2)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("succ = ", userCredential);
        navigate("/");
        localStorage.setItem("token_login", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("err = ", error);
      });
  };

  const onHandledChanged = (prop) => (event) => {
    const name = event.target.name;
    setValues({ ...values, [prop]: event.target.value });
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  console.log(state);
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Grid container xs={12} md={12} justifyContent="center" direction="row">
      <Grid
        item
        xs={4}
        md={4}
        justifySelf="center"
        style={{
          // background: "#C16C6C",
          // height: "100vh",
          // width: "100vw",
          paddingTop: "10vh",
        }}
      >
        <Paper
          elevation={10}
          style={{
            height: "78vh",
          }}
        >
          <Grid
            container
            xs={12}
            md={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={12} justifySelf="center">
              <Typography textAlign="center" fontSize="25px" marginTop="30px">
                <b>Sign In</b>
              </Typography>
            </Grid>
            <Grid item xs={4.5} md={6.5} justifySelf="center" marginTop="20px">
              <Box
                component="img"
                sx={{
                  width: {
                    md: 250,
                    xs: 60,
                  },
                }}
                alt="The house from the offer."
                src={logo}
              />
            </Grid>
            <Grid item xs={8} md={8} marginTop="20px">
              <TextField
                autoComplete="email"
                name="email"
                required
                id="email"
                onChange={onHandledChanged("email")}
                label="Email"
                size="small"
                fullWidth
                type="email"
              />
            </Grid>
            <Grid item xs={8} md={8} marginTop="20px">
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="password2"
                  // error={bool}
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={onHandledChanged("password")}
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={5} md={5} display="flex" marginTop="20px">
              <Button
                variant="contained"
                type="onSubmit"
                style={{
                  background: "#e43d84",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                }}
                sx={{ m: 1, width: "35ch" }}
                onClick={onbuttonauth}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={12} justifySelf="center" marginTop="15px">
              <Typography textAlign="center" fontSize="18px">
                Create Account ? &nbsp;
                <b
                  style={{
                    cursor: "pointer",
                    color: "black",
                  }}
                  onClick={() => navigate("/Registrasi")}
                >
                  Sign Up
                </b>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
