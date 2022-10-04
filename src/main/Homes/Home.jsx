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
              fontSize="14px"
              fontFamily="sans-serif"
              color="#6F8BA4"
              letterSpacing="3px"
            >
              {/* TOTAL HEALTH CARE SOLUTION  */}
              SOLUSI PERAWATAN KESEHATAN TOTAL
              <br />
              <br />
            </Typography>
            <Typography
              variant="p"
              fontSize="60px"
              fontFamily="sans-serif"
              color="#223a66"
            >
              <b>
                {/* Your Most Trusted <br />
                Health Partner */}
                Terpercaya Sebagai <br />
                Mitra Kesehatan
              </b>
            </Typography>
          </Grid>
          <Grid item marginTop="26ch" xs={12} md={10} justifyItems="center">
            <Grid container justifyContent="space-around">
              <Grid item>
                <Paper
                  elevation={10}
                  style={{
                    height: "350px",
                    width: "350px",
                    borderRadius: "15px",
                  }}
                >
                  <Grid
                    container
                    justifyContent="center"
                    direction={{
                      xs: "column-reverse",
                      md: "row",
                    }}
                    xs={12}
                    md={12}
                  >
                    <Grid item marginTop="30px" xs={11} md={10.5}>
                      <Box
                        component="img"
                        sx={{
                          width: {
                            md: 60,
                            xs: 60,
                          },
                        }}
                        alt="The house from the offer."
                        src={service}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} />
                    <Grid item xs={10} md={10} marginTop="30px">
                      <Typography
                        variant="p"
                        fontSize="19px"
                        fontFamily="sans-serif"
                        textAlign="justify"
                        color="#6F8BA4"
                      >
                        Layanan 24 Jam <br />
                      </Typography>
                      <Typography
                        variant="p"
                        fontSize="25px"
                        fontFamily="sans-serif"
                        textAlign="justify"
                        color="#223a66"
                      >
                        {/* <b>Online Appoinment</b> <br /> */}
                        <b>Secara Online</b> <br />
                      </Typography>
                      <Typography
                        fontFamily="sans-serif"
                        fontSize="14px"
                        textAlign="justify"
                        marginTop="25px"
                        color="#6F8BA4"
                      >
                        {/* Get all time support for emergency.We have introduced
                        the principle of family medicine. */}
                        Dapatkan layanan sepanjang waktu untuk keadaan darurat.
                        Kami telah memperkenalkan prinsip kedokteran keluarga.
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper
                  elevation={10}
                  style={{
                    height: "350px",
                    width: "350px",
                    borderRadius: "15px",
                  }}
                >
                  <Grid
                    container
                    justifyContent="center"
                    direction={{
                      xs: "column-reverse",
                      md: "row",
                    }}
                    xs={12}
                    md={12}
                  >
                    <Grid item marginTop="30px" xs={11} md={10.5}>
                      <Box
                        component="img"
                        sx={{
                          width: {
                            md: 60,
                            xs: 100,
                          },
                        }}
                        alt="The house from the offer."
                        src={clock}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} />
                    <Grid item xs={10} md={10} marginTop="30px">
                      <Typography
                        variant="p"
                        fontSize="19px"
                        fontFamily="sans-serif"
                        textAlign="justify"
                        color="#6F8BA4"
                      >
                        Timing schedule <br />
                      </Typography>
                      <Typography
                        variant="p"
                        fontSize="25px"
                        fontFamily="sans-serif"
                        textAlign="justify"
                        color="#223a66"
                      >
                        <b>Working Hours</b> <br />
                      </Typography>
                      <Typography
                        fontFamily="sans-serif"
                        fontSize="14px"
                        textAlign="justify"
                        marginTop="25px"
                        color="#6F8BA4"
                      >
                        Senin - Rabu :
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;8:00 -
                        17:00
                        <hr />
                        Kamis - Jum'at :
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;9:00 - 17:00
                        <hr />
                        Sabtu - Minggu : &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        10:00 - 17:00
                        <hr />
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper
                  elevation={10}
                  style={{
                    height: "350px",
                    width: "350px",
                    borderRadius: "15px",
                  }}
                >
                  <Grid
                    container
                    justifyContent="center"
                    direction={{
                      xs: "column-reverse",
                      md: "row",
                    }}
                    xs={12}
                    md={12}
                  >
                    <Grid item marginTop="30px" xs={11} md={10.5}>
                      <Box
                        component="img"
                        sx={{
                          width: {
                            md: 60,
                            xs: 100,
                          },
                          fill: "red",
                          stroke: "red",
                        }}
                        alt="The house from the offer."
                        src={support}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} />
                    <Grid item xs={10} md={10} marginTop="30px">
                      <Typography
                        variant="p"
                        fontSize="19px"
                        fontFamily="sans-serif"
                        textAlign="justify"
                        color="#6F8BA4"
                      >
                        {/* Emegency Cases  */}
                        Panggilan Darurat
                        <br />
                      </Typography>
                      <Typography
                        variant="p"
                        fontSize="25px"
                        fontFamily="sans-serif"
                        textAlign="justify"
                        color="#223a66"
                      >
                        <b>+60-0411-583333</b> <br />
                      </Typography>
                      <Typography
                        fontFamily="sans-serif"
                        fontSize="14px"
                        textAlign="justify"
                        marginTop="25px"
                        color="#6F8BA4"
                      >
                        {/* Get all time support for emergency.We have introduced
                        the principle of family medicine.Get Conneted with us
                        for any urgency . */}
                        Dapatkan dukungan sepanjang waktu untuk keadaan
                        darurat.Kami telah memperkenalkan prinsip pengobatan
                        keluarga.Terhubunglah dengan kami untuk segala urgensi.
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} md={10} marginTop="50ch">
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
              <b>Perawatan Pribadi & Hidup Sehat</b>
            </Typography>
            <Typography color="#6F8BA4" fontSize="16px" fontFamily="sans-serif">
              Kami memberikan pelayanan medis terdepan yang terbaik, terutama
              dalam pengobatan kanker payudara
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
