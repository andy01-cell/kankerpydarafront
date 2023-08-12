import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  clock,
  home1,
  home2,
  home3,
  homebg,
  service,
  support,
} from "../../assets/exportimage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid container xs={12} md={12} justifyContent="center">
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          backgroundImage: `url(${homebg})`,
          height: "550px",
          width: { xs: "200px" },
          marginTop: "16vh",
          paddingTop: "11vh",
        }}
      >
        <Grid container xs={12} md={12} justifyContent="center">
          <Grid item marginLeft="120px" xs={12} md={12}>
            <hr
              color="#e12454"
              style={{
                width: "40px",
                height: "3.5px",
                marginLeft: "0px",
                marginBottom: "20px",
              }}
            ></hr>
            <Typography
              variant="p"
              fontSize="60px"
              fontFamily="sans-serif"
              color="#223a66"
            >
              <b>
                {/* Your Most Trusted <br />
                Health Partner */}
                Deteksi Penyakit <br />
                Kanker Payudara
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} md={10} marginTop="8ch">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={3.8} md={3.8}>
            <Box
              component="img"
              sx={{
                width: {
                  md: 350,
                  xs: 350,
                },
              }}
              alt="The house from the offer."
              src={home1}
            />
            <Box
              component="img"
              sx={{
                width: {
                  md: 350,
                  xs: 350,
                },
              }}
              alt="The house from the offer."
              src={home2}
              marginTop="20px"
            />
          </Grid>
          <Grid item xs={3.8} md={3.8}>
            <Box
              component="img"
              sx={{
                width: {
                  md: 350,
                  xs: 350,
                },
              }}
              alt="The house from the offer."
              src={home3}
              marginTop="20px"
            />
          </Grid>
          <Grid item xs={3.8} md={3.8}>
            <Typography color="#223a66" fontSize="44px" fontFamily="sans-serif">
              <b>Informasi Penyakit Kanker Payudara</b>
            </Typography>
            <Typography color="#6F8BA4" fontSize="16px" fontFamily="sans-serif">
              Karakteristik atau ciri-ciri dari penyakit kanker payudara sesuai
              tingkat stadium
            </Typography>
            <Button
              variant="contained"
              type="onSubmit"
              size="large"
              onClick={() => navigate("/Characteristic")}
              style={{
                background: "#e12454",
                boxSizing: "border-box",
                borderRadius: "50px",
                fontFamily: "sans-serif",
                fontSize: "0.8125rem",
                marginTop: "40px",
              }}
            >
              <b>Characteristic &emsp; {">"}</b>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
