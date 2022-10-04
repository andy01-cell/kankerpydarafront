import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { bgall } from "../../assets/exportimage";

const About = () => {
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
      />
      <Grid item xs={10} md={10} marginTop="15ch">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={3.8} md={3.8}>
            <Typography
              variant="p"
              fontSize="44px"
              fontFamily="sans-serif"
              color="#223a66"
            >
              <b>About Us</b>
            </Typography>
          </Grid>
          <Grid item xs={3.8} md={7.9}>
            <Typography
              fontFamily="sans-serif"
              fontSize="16px"
              textAlign="justify"
              marginTop="25px"
              color="#6F8BA4"
            >
              Sistem <i>MammoBreast</i> merupakan sistem yang dapat mendeteksi kanker
              payudara, mengetahui stadium, dan informasi mengenai kanker
              payudara. Pencegahan kanker payudara dapat dilakukan dengan
              pemeriksaan payudara secara mandiri atau pemeriksaan oleh petugas
              medis di rumah sakit Dr. Wahidin Sudirohusodo Makassar.
              Pemeriksaan harus dilakukan secara rutin bila Anda berisiko
              terserang kanker payudara. Selain itu, disarankan untuk
              berolahraga secara rutin dan tidak mengonsumsi minuman beralkohol.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
