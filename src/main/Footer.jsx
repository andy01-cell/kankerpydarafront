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
          <Grid item xs={3.9} md={3.9} marginTop="10ch">
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
            <Typography
              fontFamily="sans-serif"
              fontSize="16px"
              textAlign="justify"
              marginTop="25px"
              color="#6F8BA4"
            >
              Visi: Menjadi Academic Health Center Terkemuka di Indonesia. Misi:
              menyelenggarakan pelayanan, pendidikan dan penelitian di bidang
              kesehatan berkualitas yang berintegrasi Holistic dan Profesional,
              mengampu rumah sakit jejaring wilayah di Indonesia Timur.
            </Typography>
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
              Cardioc <br />
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
          <Grid item xs={2} md={2.5} marginTop="10ch">
            <Typography
              variant="p"
              fontSize="23px"
              fontFamily="sans-serif"
              textAlign="justify"
              color="#223a66"
            >
              <b>Get In Touch</b> <br />
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
            <Grid container marginTop="30px">
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    width: {
                      md: 20,
                      xs: 20,
                    },
                  }}
                  alt="The house from the offer."
                  src={emailico}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontFamily="sans-serif"
                  fontSize="16px"
                  color="#6F8BA4"
                  //   lineHeight="35px"
                  alignItems="center"
                >
                  &emsp;Support Available for 24/7
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="p"
                  fontSize="20px"
                  fontFamily="sans-serif"
                  textAlign="justify"
                  color="#222"
                >
                  <b>infor@ruspwahidin.com</b> <br />
                </Typography>
              </Grid>
              <Grid item marginTop="30px">
                <Box
                  component="img"
                  sx={{
                    width: {
                      md: 20,
                      xs: 20,
                    },
                  }}
                  alt="The house from the offer."
                  src={support}
                />
              </Grid>
              <Grid item marginTop="30px">
                <Typography
                  fontFamily="sans-serif"
                  fontSize="16px"
                  color="#6F8BA4"
                  //   lineHeight="35px"
                  alignItems="center"
                >
                  &emsp;Mon to Fri : 08:30 - 18:00
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="p"
                  fontSize="20px"
                  fontFamily="sans-serif"
                  textAlign="justify"
                  color="#222"
                >
                  <b>+60-0411-583333</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} md={10} marginTop="25px">
        <hr  />
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
