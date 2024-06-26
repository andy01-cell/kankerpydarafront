import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { logoprint1, logoprint2 } from "../../assets/exportimage";
import { useLocation } from "react-router-dom";

const Hasildiagnosa = () => {
  const datapredik = useLocation();

  return (
    <div>
      <Grid container xs={11.5} md={11.5} justifyContent="center">
        <Grid item xs={12} md={6.4} marginTop="50px">
          <Typography
            fontSize="25px"
            textAlign="center"
            sx={{ fontFamily: "Times New Roman" }}
          >
            <b>HASIL PEMERIKSAAN</b>
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={12} md={6.4} marginTop="25px">
          <Grid container justifyContent="center">
            <Grid item xs={4.75} md={4.75} justifyContent="center">
              <Box
                component="img"
                sx={{
                  width: {
                    md: 270,
                    xs: 270,
                  },
                }}
                alt="The house from the offer."
                src={"http://localhost:5000//static/clasifer/clasifier.jpg"}
              />
            </Grid>
            <Grid item xs={12} md={12} marginTop="35px">
              <Grid container xs={12} md={12} textAlign="center">
                <Grid item xs={5} md={5}>
                  <Typography
                    fontSize="17px"
                    sx={{ fontFamily: "Times New Roman" }}
                  >
                    SVM Kernel RBF
                  </Typography>
                  <Typography
                    fontSize="17px"
                    sx={{ fontFamily: "Times New Roman" }}
                    marginTop="10px"
                  >
                    {datapredik.state.lvlkankerrbf}
                  </Typography>
                  <Typography
                    fontSize="17px"
                    sx={{ fontFamily: "Times New Roman" }}
                    marginTop="10px"
                  >
                    {datapredik.state.hasilakurasirbf}%
                  </Typography>
                </Grid>
                <Grid item md={2} xs={2} />
                <Grid item xs={5} md={5}>
                  <Typography
                    fontSize="17px"
                    sx={{ fontFamily: "Times New Roman" }}
                  >
                    SVM Kernel Polynomial
                  </Typography>
                  <Typography
                    fontSize="17px"
                    sx={{ fontFamily: "Times New Roman" }}
                    marginTop="10px"
                  >
                    {datapredik.state.lvlkankerpoly}
                  </Typography>
                  <Typography
                    fontSize="17px"
                    sx={{ fontFamily: "Times New Roman" }}
                    marginTop="10px"
                  >
                    {datapredik.state.hasilakurasipoly}%
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              marginTop="7ch"
              marginBottom="7ch"
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hasildiagnosa;
