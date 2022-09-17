import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  bgall,
  karakteristik1,
  karakteristik2,
  karakteristik3,
  karakteristik4,
  karakteristik5,
} from "../../assets/exportimage";

const Characteristic = () => {
  const navigate = useNavigate();
  return (
    <Grid container xs={12} md={12} justifyContent="center">
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          backgroundImage: `url(${bgall})`,
          height: "240px",
          width: { xs: "200px" },
          marginTop: "16vh",
          paddingTop: "11vh",
        }}
      ></Grid>
      <Grid item xs={10} md={10} marginTop="15ch">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={3.8} md={3.8}>
            <Paper
              elevation={10}
              style={{
                height: "660px",
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
                <Grid item xs={11} md={10.5}>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        md: 350,
                        xs: 60,
                      },
                    }}
                    alt="The house from the offer."
                    src={karakteristik1}
                  />
                </Grid>
                <Grid item xs={12} md={12} />
                <Grid item xs={10} md={10} marginTop="30px">
                  <Typography
                    variant="p"
                    fontSize="25px"
                    fontFamily="sans-serif"
                    textAlign="justify"
                    color="#223a66"
                  >
                    <b>Stadium 1</b> <br />
                  </Typography>
                  <Typography
                    fontFamily="sans-serif"
                    fontSize="16px"
                    textAlign="justify"
                    marginTop="25px"
                    color="#6F8BA4"
                  >
                    Muncul tumor di payudara, namun ukurannya kurang dari 2
                    centimeter, Sel kanker belum menyebar di luar jaringan
                    payudara, Ditemukan sekelompok sel kanker dengan ukuran
                    antara 0,2 milimeter sampai 2 milimeter di kelenjar getah
                    bening, Payudara membengkak atau memerah, Bentuk dan ukuran
                    payudara berubah menjadi lebih besar, Tampilan putting susu
                    berubah, Keluar cairan dari putting meski tidak menyusui,
                    Payudara terasa nyeri, Benjolan di payudara.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3.8} md={3.8}>
            <Paper
              elevation={10}
              style={{
                height: "660px",
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
                <Grid item xs={11} md={10.5}>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        md: 350,
                        xs: 60,
                      },
                    }}
                    alt="The house from the offer."
                    src={karakteristik2}
                  />
                </Grid>
                <Grid item xs={12} md={12} />
                <Grid item xs={10} md={10} marginTop="30px">
                  <Typography
                    variant="p"
                    fontSize="25px"
                    fontFamily="sans-serif"
                    textAlign="justify"
                    color="#223a66"
                  >
                    <b>Stadium 2</b> <br />
                  </Typography>
                  <Typography
                    fontFamily="sans-serif"
                    fontSize="16px"
                    textAlign="justify"
                    marginTop="25px"
                    color="#6F8BA4"
                  >
                    Ditemukan tumor berukuran kurang dari 2 centimeter dan
                    kanker mulai menyebar ke 1-3 kelenjar getah bening di
                    ketiak, Muncul tumor berukuran antara 2-5 centimeter tapi
                    terkadang sel kanker belum menyebar ke kelenjar getah bening
                    di ketiak, Ditemukan sekelompok sel kanker payudara dengan
                    ukuran antara 0,2-2 milimeter di antara 1-3 kelenjar getah
                    bening, Ada tumor dengan ukuran lebih dari 5 centimeter tapi
                    sel kanker belum menyebar ke kelenjar getah bening di
                    ketiak.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3.8} md={3.8}>
            <Paper
              elevation={10}
              style={{
                height: "660px",
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
                <Grid item xs={11} md={10.5}>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        md: 350,
                        xs: 60,
                      },
                    }}
                    alt="The house from the offer."
                    src={karakteristik3}
                  />
                </Grid>
                <Grid item xs={12} md={12} />
                <Grid item xs={10} md={10} marginTop="30px">
                  <Typography
                    variant="p"
                    fontSize="25px"
                    fontFamily="sans-serif"
                    textAlign="justify"
                    color="#223a66"
                  >
                    <b>Stadium 3</b> <br />
                  </Typography>
                  <Typography
                    fontFamily="sans-serif"
                    fontSize="16px"
                    textAlign="justify"
                    marginTop="25px"
                    color="#6F8BA4"
                  >
                    Ada tumor berukuran lebih dari 5 centimeter dan ada
                    sekelompok sel kanker payudara berukuran antara 0,2-2
                    milimeter di kelenjar getah bening, Muncul tumor berukuran
                    lebih dari 5 centimeter dan kanker telah menyebar di 1-3
                    kelenjar getah bening di ketiak atau dekat tulang dada,
                    Kanker menyebar sampai ke sembilan kelenjar getah bening di
                    ketiak atau dekat tulang dada Sebagian besar kulit payudara
                    kemerahan, Payudara terasa panas dan bengkak.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} md={10} marginTop="10ch" justify="start">
        <Grid container justifyContent="start">
          <Grid item xs={3.8} md={3.8}>
            <Paper
              elevation={10}
              style={{
                height: "550px",
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
                <Grid item xs={11} md={10.5}>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        md: 350,
                        xs: 60,
                      },
                    }}
                    alt="The house from the offer."
                    src={karakteristik4}
                  />
                </Grid>
                <Grid item xs={12} md={12} />
                <Grid item xs={10} md={10} marginTop="30px">
                  <Typography
                    variant="p"
                    fontSize="25px"
                    fontFamily="sans-serif"
                    textAlign="justify"
                    color="#223a66"
                  >
                    <b>Stadium 4</b> <br />
                  </Typography>
                  <Typography
                    fontFamily="sans-serif"
                    fontSize="16px"
                    textAlign="justify"
                    marginTop="25px"
                    color="#6F8BA4"
                  >
                    Ciri kanker payudara stadium akhir atau stadium 4 ditandai
                    dengan kanker payudara sudah mengganas dan menyebar ke luar
                    jaringan payudara dan kelenjar getah bening. Di stadium
                    akhir ini, kanker bisa merembet ke organ lain seperti
                    paru-paru, kulit, tulang, hati, sampai ke otak.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Characteristic;
