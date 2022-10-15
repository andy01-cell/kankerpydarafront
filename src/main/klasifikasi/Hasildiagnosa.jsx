import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { logoprint1, logoprint2 } from "../../assets/exportimage";
import { useLocation } from "react-router-dom";

const Hasildiagnosa = () => {
  const datapredik = useLocation();

  return (
    <div>
      <Grid container xs={11.5} md={11.5} justifyContent="center">
        <Grid item>
          <Box
            component="img"
            sx={{
              width: {
                md: 100,
                xs: 100,
              },
            }}
            alt="The house from the offer."
            src={logoprint1}
          />
        </Grid>
        <Grid item xs={0.3} md={0.2}></Grid>
        <Grid item>
          <Typography
            fontSize="16.9px"
            sx={{ fontFamily: "Times New Roman" }}
            lineHeight="20px"
          >
            <b>KEMENTERIAN KESEHATAN REPUBLIK INDONESIA</b>
          </Typography>
          <Typography
            fontSize="15px"
            textAlign="center"
            sx={{ fontFamily: "Times New Roman" }}
            lineHeight="15px"
          >
            <b>DIREKTORAT JENDERAL PELAYANAN KESEHATAN</b>
          </Typography>
          <Typography
            fontSize="15px"
            textAlign="center"
            sx={{ fontFamily: "Times New Roman" }}
          >
            RUMAH SAKIT UMUM PUSAT DR. WAHIDIN SUDIROHUSODO
          </Typography>
          <Typography
            fontSize="12.5px"
            textAlign="center"
            sx={{ fontFamily: "Times New Roman" }}
          >
            Address: Jl.Perintis Kemerdekaan Km.11, Tamalanrea, Makassar, Kode
            Pos: 90245
          </Typography>
          <Typography
            fontSize="12.5px"
            textAlign="center"
            sx={{ fontFamily: "Times New Roman" }}
          >
            Telp (0411) 584675 – 581818 (Hunting) , Fax (0411) 587676
          </Typography>
          <Typography
            fontSize="12.5px"
            textAlign="center"
            sx={{ fontFamily: "Times New Roman" }}
          >
            Laman: www.rsupwahidin.com Surat Elektronik: tu@rsupwahidin.com
          </Typography>
        </Grid>
        <Grid item xs={0.3} md={0.2}></Grid>
        <Grid item>
          <Box
            component="img"
            sx={{
              width: {
                md: 100,
                xs: 100,
              },
            }}
            alt="The house from the offer."
            src={logoprint2}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <hr
            color="#000"
            style={{
              width: "680px",
              //   marginLeft: "0px",
              height: "1.5px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6.4}>
          <Grid container justifyContent="space-between">
            <Grid item xs={6} md={6}>
              <Grid container xs={12} md={12}>
                <Grid item xs={4.5} md={4.5}>
                  Nik
                  <br />
                  Nama Pasien
                  <br />
                  No. Rekam Medis
                </Grid>
                <Grid item xs={0.3} md={0.3}>
                  :
                  <br />
                  :
                  <br />:
                </Grid>
                <Grid item xs={7.2} md={7.2}>
                  {datapredik.state.nik}
                  <br />
                  {datapredik.state.nama}
                  <br />
                  {datapredik.state.medis}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={6}>
              <Grid container xs={12} md={12}>
                <Grid item xs={4.5} md={4.5}>
                  Tanggal Lahir
                  <br />
                  Umur
                  <br />
                  Alamat
                </Grid>
                <Grid item xs={0.3} md={0.3}>
                  :
                  <br />
                  :
                  <br />:
                </Grid>
                <Grid item xs={7.2} md={7.2}>
                  {datapredik.state.tgl}
                  <br />
                  {datapredik.state.umur}
                  <br />
                  {datapredik.state.alamat}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={12} md={6.4} marginTop="50px">
          <Typography
            fontSize="25px"
            textAlign="center"
            sx={{ fontFamily: "Times New Roman" }}
          >
            <b>HASIL PEMERIKSAAN</b>
          </Typography>
          <Typography
            fontSize="17px"
            textAlign="center"
            sx={{ fontFamily: "Times New Roman" }}
          >
            <b>DIAGNOSA</b>
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={12} md={6.4} marginTop="25px">
          <Grid container justifyContent="space-between">
            <Grid item xs={4} md={4}>
              <Box
                component="img"
                sx={{
                  width: {
                    md: 270,
                    xs: 270,
                  },
                }}
                alt="The house from the offer."
                src={
                  "https://cancerpydara.herokuapp.com//static/clasifer/clasifier.jpg"
                }
              />
              <Typography
                fontSize="17px"
                sx={{ fontFamily: "Times New Roman" }}
              >
                {datapredik.state.lvlkanker}
              </Typography>
              <Typography
                fontSize="17px"
                sx={{ fontFamily: "Times New Roman" }}
              >
                PERSENTASE {datapredik.state.hasilakurasi}%
              </Typography>
            </Grid>
            <Grid item xs={6.8} md={6.8} marginTop="-15px">
              <Typography
                fontSize="15px"
                textAlign="justify"
                sx={{ fontFamily: "Times New Roman" }}
              >
                {datapredik.state.diagnosa}
              </Typography>
              <Typography
                fontSize="17px"
                textAlign="justify"
                sx={{ fontFamily: "Times New Roman" }}
                marginTop
              >
                <b>Cara Penanganan :</b>
              </Typography>
              <Typography
                fontSize="15px"
                textAlign="justify"
                sx={{ fontFamily: "Times New Roman" }}
              >
                {datapredik.state.healsolusi}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6.4} marginTop="25px">
          <Typography
            fontSize="15px"
            textAlign="justify"
            sx={{ fontFamily: "Times New Roman" }}
          >
            Catatan Dokter :
          </Typography>
          <Typography
            fontSize="14px"
            textAlign="justify"
            sx={{ fontFamily: "Times New Roman" }}
          >
            <ol>
              <li>{datapredik.state.catatan1}</li>
              <li>{datapredik.state.catatan2}</li>
              <li>{datapredik.state.catatan3}</li>
            </ol>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6.4} marginTop="25px">
          <Grid container justifyContent="end">
            <Grid item>
              <Typography
                fontSize="15px"
                textAlign="justify"
                sx={{ fontFamily: "Times New Roman" }}
              >
                Dokter Penanggung jawab
                <br />
                Makassar,&emsp;&emsp;&emsp;&emsp; 20 &emsp;&emsp;&emsp;
                <br />
                <br />
                <br />
                <br />
                (...................................)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hasildiagnosa;
