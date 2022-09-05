import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { logo, logout } from "../assets/exportimage";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/Firebase";
import Home from "./karakteristik/Characteristic";
import Diagnosis from "./klasifikasi/Diagnosis";
import Footer from "./Footer";

const Navbar = () => {
  const [disabled, setDisabled] = useState("#000");
  const [disabled1, setDisabled1] = useState("#000");
  const [disabled2, setDisabled2] = useState("#000");
  const [disabled3, setDisabled3] = useState("#000");

  const navigate = useNavigate();
  let user = localStorage.getItem("token_login");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("login = ", user);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("logout = ", user);
        navigate("/Login");
      }
    });
  });

  const informasiklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala1") {
      setDisabled("#e3dede");
      setDisabled1("#000");
      setDisabled2("#000");
      setDisabled3("#000");
    } else {
      setDisabled1("#000");
      setDisabled("#000");
      setDisabled2("#000");
      setDisabled3("#000");
    }
  };
  const diagnosaklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala2") {
      setDisabled1("#e3dede");
      setDisabled("#000");
      setDisabled2("#000");
      setDisabled3("#000");
    } else {
      setDisabled1("#000");
      setDisabled("#000");
      setDisabled2("#000");
      setDisabled3("#000");
    }
  };

  const bantuanklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala3") {
      setDisabled2("#e3dede");
      setDisabled1("#000");
      setDisabled("#000");
      setDisabled3("#000");
    } else {
      setDisabled1("#000");
      setDisabled("#000");
      setDisabled2("#000");
      setDisabled3("#000");
    }
  };

  const karakteristik = (params) => {
    console.log("test => ", params);

    if (params === "nyala4") {
      setDisabled2("#000");
      setDisabled1("#000");
      setDisabled("#000");
      setDisabled3("#e3dede");
    } else {
      setDisabled1("#000");
      setDisabled("#000");
      setDisabled2("#000");
      setDisabled3("#000");
    }
  };

  const [setting, setSetting] = React.useState(null);
  const opensetting = Boolean(setting);
  const [open, setOpen] = React.useState(false);
  const handleClicksetting = (event) => {
    setSetting(event.currentTarget);
  };
  const handleClosesetting = () => {
    setSetting(null);
  };

  const onbuttonlogout = () => {
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
        console.log("logout = ", error);
      });
  };

  return (
    <div>
      <AppBar elevation="2">
        <Toolbar
          sx={{
            background: "white",
            height: "17vh",
          }}
        >
          <Grid container justifyContent="space-between" xs={12} md={12}>
            <Grid item xs={2} md={2}>
              <Grid
                container
                alignItems="center"
                justifyContent="end"
                sx={{
                  height: "17vh",
                }}
              >
                <Grid item>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        md: 126,
                        xs: 50,
                      },
                    }}
                    alt="The house from the offer."
                    src={logo}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8} md={4}>
              {/* <nav> */}
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  height: "17vh",
                }}
              >
                <Grid item onClick={() => informasiklik("nyala1")}>
                  <Typography
                    variant="p"
                    fontSize="17px"
                    fontFamily="sans-serif"
                    onClick={() => navigate("/")}
                    style={{
                      cursor: "pointer",
                    }}
                    color={disabled}
                  >
                    <b>Home</b>
                  </Typography>
                </Grid>
                <Grid item onClick={() => karakteristik("nyala4")}>
                  <Typography
                    variant="p"
                    fontSize="17px"
                    fontFamily="sans-serif"
                    onClick={() => navigate("/Characteristic")}
                    style={{
                      cursor: "pointer",
                    }}
                    color={disabled3}
                  >
                    <b>Characteristic</b>
                  </Typography>
                </Grid>
                <Grid item onClick={() => diagnosaklik("nyala2")}>
                  <Typography
                    variant="p"
                    fontSize="17px"
                    fontFamily="sans-serif"
                    onClick={() => navigate("/Diagnosis")}
                    style={{
                      cursor: "pointer",
                    }}
                    color={disabled1}
                  >
                    <b>Classification </b>
                  </Typography>
                </Grid>
                <Grid item onClick={() => bantuanklik("nyala3")}>
                  <Typography
                    variant="p"
                    fontSize="17px"
                    fontFamily="sans-serif"
                    type="button"
                    onClick={() => navigate("/About")}
                    style={{
                      cursor: "pointer",
                    }}
                    color={disabled2}
                  >
                    <b>About</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        md: 20,
                        xs: 20,
                      },
                      cursor: "pointer",
                    }}
                    alt="The house from the offer."
                    onClick={onbuttonlogout}
                    src={logout}
                  />
                </Grid>
              </Grid>
              {/* </nav> */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
