import {
  Alert,
  Button,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { auth, db } from "../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const Registrasi = () => {
  const [state, setState] = useState({
    email: "",
    password2: "",
    username: "",
    phone: "",
    jenis_klmn: "",
    errorlog: "",
  });

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [open, setOpen] = React.useState(false);

  const postregister = () => {
    // const { email, password2 } = state;
    createUserWithEmailAndPassword(
      auth,
      state.email,
      state.password2,
      state.username,
      state.phone,
      state.jenis_klmn
    )
      .then((userCredential) => {
        // Signed in
        addDoc(collection(db, "Registrasi"), {
          Username: state.username,
          Password: state.password2,
          Email: state.email,
          HP: state.phone,
          Jenis_Kelamin: state.jenis_klmn,
        });
        const user = userCredential.user;
        localStorage.setItem("token_login", user);
        console.log("succ = ", userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("err = ", error);
        state.errorlog = errorCode;
        setOpen(true);
      });

    console.log("data = ", state);
  };

  const onHandledChanged = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Grid
      container
      xs={12}
      md={12}
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={4} md={4}>
        <Paper elevation={10}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12} justifySelf="center">
              <Typography textAlign="center" fontSize="20px" marginTop="30px">
                <b>Sign Up</b>
              </Typography>
            </Grid>
            <Grid item xs={8} md={8}>
              <Collapse in={open}>
                <Alert severity="error">{state.errorlog}</Alert>
              </Collapse>
            </Grid>
            <Grid item xs={8} md={8} marginTop="20px">
              <TextField
                autoComplete="username"
                name="username"
                required
                id="username"
                onChange={onHandledChanged}
                label="Username"
                size="small"
                fullWidth
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
                  onChange={onHandledChanged}
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
            <Grid item xs={8} md={8} marginTop="20px">
              <TextField
                autoComplete="email"
                name="email"
                required
                id="email"
                onChange={onHandledChanged}
                label="Email"
                size="small"
                fullWidth
                type="email"
              />
            </Grid>
            <Grid item xs={8} md={8} marginTop="20px">
              <TextField
                autoComplete="phone"
                name="phone"
                required
                id="phone"
                onChange={onHandledChanged}
                label="Phone"
                size="small"
                fullWidth
                type="phone"
              />
            </Grid>
            <Grid item xs={8} md={8} marginTop="20px">
              <TextField
                autoComplete="jenis_klmn"
                name="jenis_klmn"
                required
                id="jenis_klmn: "
                onChange={onHandledChanged}
                label="Jenis Kelamin"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={5}
              md={5}
              display="flex"
              marginTop="20px"
              marginBottom="3ch"
            >
              <Button
                variant="contained"
                type="submit"
                style={{
                  background: "#e43d84",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                }}
                sx={{ m: 1, width: "35ch" }}
                onClick={postregister}
              >
                Daftar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Registrasi;
