import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { emailico, logo, service, support } from "../assets/exportimage";

const Footer = () => {
  return (
    <Grid
      container
      xs={12}
      md={12}
      sx={{ background: "#f4f9fc" }}
      marginTop="10ch"
      justifyContent="center"
    >
      <Grid item xs={10} md={10}>
        <Grid container xs={12} md={12} justifyContent="space-between">
          <Grid item xs={3.9} md={6} marginTop="10ch">
            <Grid container xs={12} md={12} justifyContent="center">
              <Grid item xs={4} md={3}>
                <Box
                  component="img"
                  sx={{
                    width: {
                      md: 126,
                      xs: 126,
                    },
                  }}
                  alt="The house from the offer."
                  src={logo}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  fontFamily="sans-serif"
                  fontSize="16px"
                  textAlign="justify"
                  marginTop="25px"
                  color="#6F8BA4"
                >
                  Visi: Menjadi Pusat Kesehatan Akademi Terkemuka di Indonesia.
                  Misi: menyelenggarakan pelayanan, pendidikan dan penelitian di
                  bidang kesehatan berkualitas yang berintegrasi Holistic dan
                  Profesional, terkhusus rumah sakit jejaring wilayah di
                  Indonesia Timur.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1.4} md={1.4} marginTop="10ch">
            <Typography
              variant="p"
              fontSize="23px"
              fontFamily="sans-serif"
              textAlign="justify"
              color="#223a66"
            >
              <b>Department</b> <br />
            </Typography>
            <hr
              color="#e12454"
              style={{
                width: "40px",
                height: "1.5px",
                marginLeft: "0px",
                marginBottom: "20px",
              }}
            ></hr>
            <Typography
              fontFamily="sans-serif"
              fontSize="16px"
              textAlign="justify"
              marginTop="25px"
              color="#6F8BA4"
              lineHeight="35px"
            >
              Surgery <br />
              Wome's Health <br />
              Radiology <br />
              Breast Cancer <br />
              Medicine
            </Typography>
          </Grid>
          <Grid item xs={1.5} md={1.6} marginTop="10ch">
            <Typography
              variant="p"
              fontSize="23px"
              fontFamily="sans-serif"
              textAlign="justify"
              color="#223a66"
            >
              <b>Support</b> <br />
            </Typography>
            <hr
              color="#e12454"
              style={{
                width: "40px",
                height: "1.5px",
                marginLeft: "0px",
                marginBottom: "20px",
              }}
            ></hr>
            <Typography
              fontFamily="sans-serif"
              fontSize="16px"
              textAlign="justify"
              marginTop="25px"
              color="#6F8BA4"
              lineHeight="35px"
            >
              Terms & Conditions <br />
              Privacy Policy <br />
              Company Support <br />
              FAQuestions <br />
              Company Licence
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} md={10} marginTop="25px">
        <hr />
        <Typography
          fontFamily="sans-serif"
          fontSize="18px"
          textAlign="justify"
          marginTop="25px"
          color="#6F8BA4"
        >
          &copy; Copyright by Leniawati
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
