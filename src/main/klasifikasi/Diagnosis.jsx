import { useState, useEffect } from "react";
import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import DwvComponent from "../imagedicom/DwvComponent";
import { bgall } from "../../assets/exportimage";
import { useNavigate } from "react-router-dom";

const Diagnosis = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    imgdicom: "",
    imgdicomurl: null,
    imgkanker: "",
    errorlog: "",
  });

  const onSetFile = async (e) => {
    const file = e.target.files[0];
    console.log("file = ", file);
    setState({
      ...state,
      imgdicom: file,
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleToggle = () => {
  //   setOpen(open);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setOpen(open);
    onbtndiagnosa(event);
  };

  const onbtndiagnosa = async (event) => {
    event.preventDefault();
    setOpen(!open);
    const data = new FormData();
    data.append("files", state.imgdicom);
    console.log(state);
    axios
      .post("http://localhost:5000/upload", data, {
        // .post("https://kankerpydara.netlify.app/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // tambahkan data ke Firestore
        console.log("file");
        console.log("Data berhasil ditambahkan!");
        console.log("post succes : ", res);
        let lvlkanker;
        let healsolusi;
        let diagnosa;
        let catatan1;
        let catatan2;
        let catatan3;
        state.imgkanker = res.data;
        console.log(" succes : ", state.imgkanker.prediksi);
        const hasilprediksirbf = res.data.prediksi_rbf;
        const hasilprediksipoly = res.data.prediksi_poly;
        const hasilakurasirbf = res.data.akurasi_rbf;
        const hasilakurasipoly = res.data.akurasi_poly;
        if (hasilprediksirbf == "stadium 1") {
          navigate("/Hasildiagnosa", {
            state: {
              lvlkankerrbf: hasilprediksirbf,
              lvlkankerpoly: hasilprediksipoly,
              hasilakurasipoly: parseFloat(hasilakurasipoly * 100).toFixed(2),
              hasilakurasirbf: parseFloat(hasilakurasirbf * 100).toFixed(2),
            },
          });
        } else if (hasilprediksirbf == "stadium 2") {
          diagnosa =
            "Stadium 2 merupakan masih dikatakan kanker payudara invasif dan stadium ini masih dalam tahap awal. Pada stadium II, ukuran tumor sudah lebih besar daripada stadium sebelumnya dengan ukuran 2-5 cm. Sel kanker pun sudah menyebar ke kelenjar getah bening, walau masih di area yang terdekat, tetapi belum menyebar ke bagian tubuh yang lebih jauh. Ditemukan sekelompok sel kanker payudara dengan ukuran antara 0,2-2 milimeter di antara 1-3 kelenjar getah bening, Ada tumor dengan ukuran lebih dari 5 centimeter tapi sel kanker belum menyebar ke kelenjar getah bening di ketiak.";
          healsolusi =
            "Cara mengobati kanker payudara pada stadium ini bisa dilakukan dengan pembedahan atau pengangkatan tumor, terapi radiasi, pengangkatan payudara (masektomi), kemoterapi untuk mengecilkan ukuran payudara sebelum operasi, serta terapi hormon dan terapi bertarget. ";
          catatan1 =
            "Pasien mengalami kanker payudara STADIUM 2, dengan ini pasien harus mengonsumsi obat dari resep dokter dan menjalani terapi.";
          catatan2 =
            "Angka harapan hidup bagi pengidap kanker payudara STADIUM 2 bisa mencapai 80% dalam 5 tahun pengobatan.";
          catatan3 =
            "Pasien penyakit kanker payudara STADIUM 2 pengobatan yang diberikan yaitu operasi kanker payudara.";
          navigate("/Hasildiagnosa", {
            state: {
              lvlkankerrbf: hasilprediksirbf,
              lvlkankerpoly: hasilprediksipoly,
              healsolusi: healsolusi,
              hasilakurasipoly: parseFloat(hasilakurasipoly * 100).toFixed(2),
              hasilakurasirbf: parseFloat(hasilakurasirbf * 100).toFixed(2),
              diagnosa: diagnosa,
              catatan1: catatan1,
              catatan2: catatan2,
              catatan3: catatan3,
            },
          });
        } else if (hasilprediksirbf == "stadium 3") {
          diagnosa =
            "Stadium 3 disebut juga dengan kanker payudara stadium lanjut lokal. Artinya, tumor ganas atau benjolan yang ditemukan bisa lebih besar dengan ukuran lebih dari 5 cm, belum menginfiltrasi jaringan sekitar payudara dan sudah ada penyebaran ke kelenjar getah bening ketiak. Pada tahap ini, Kanker menyebar sampai ke sembilan kelenjar getah bening di ketiak atau dekat tulang dada Sebagian besar kulit payudara kemerahan, Payudara terasa panas dan bengkak.";
          healsolusi =
            "Pada tahap ini, ukurannya > 5 cm dimana sudah ada infiltrasi di jaringan sekitar daerah puting dan kulit payudara, sehingga tumor tidak bisa dilakukan reseksi/operasi. Perlu dilakukan kemoterapi terlebih dahulu disebut sebagai kemoterapi neoadjuvant. Setelah itu dilakukan penilaian respon, apabila respon baik terapi dapat dilanjukan dengan pembedahan (mastektomi radikal).";
          catatan1 =
            "Pasien mengalami kanker payudara STADIUM 3 sudah tidak melakukan operasi maka dari itu disarankan melakukan kemoterapi.";
          catatan2 =
            "Penyakit yang di derita pasien mulai menyebar ke seluruh jaringan pada payudara.";
          catatan3 =
            "Pada penyakit kanker payudara STADIUM 3 memiliki angka hidup sekitar 30% - 50%.";
          navigate("/Hasildiagnosa", {
            state: {
              lvlkankerrbf: hasilprediksirbf,
              lvlkankerpoly: hasilprediksipoly,
              healsolusi: healsolusi,
              hasilakurasipoly: parseFloat(hasilakurasipoly * 100).toFixed(2),
              hasilakurasirbf: parseFloat(hasilakurasirbf * 100).toFixed(2),
              diagnosa: diagnosa,
              catatan1: catatan1,
              catatan2: catatan2,
              catatan3: catatan3,
            },
          });
        } else {
          diagnosa =
            "Stadium 4 merupakan tahap paling akhir dan merupakan kondisi serius yang mengancam jiwa. Pasien kanker payudara stadium IV4 atau metastatis memang tidak dapat disembuhkan total. Pada stadium ini, kanker telah menyebar dari payudara dan kelenjar getah bening di sekitarnya ke organ tubuh lain, seperti paru-paru, kelenjar getah bening yang jauh dari payudara, kulit, tulang, hati, atau otak.";
          healsolusi =
            "Pada tahap ini, pengobatan tetap perlu dijalani untuk meringankan gejala, meningkatkan kualitas hidup, serta memperpanjang angka harapan hidup, dengan mengecilkan dan memperlambat pertumbuhan sel kanker.";
          catatan1 =
            "Pasien mengalami kanker payudara STADIUM 4 yang sudah tidak bisa lagi dioperasi.";
          catatan2 =
            "Angka harapan hidupnya pun hanya sekitar 20% - 25% yang bisa bertahan selama 5 tahun setelah di diagnosis.";
          navigate("/Hasildiagnosa", {
            state: {
              lvlkankerrbf: hasilprediksirbf,
              lvlkankerpoly: hasilprediksipoly,
              healsolusi: healsolusi,
              hasilakurasipoly: parseFloat(hasilakurasipoly * 100).toFixed(2),
              hasilakurasirbf: parseFloat(hasilakurasirbf * 100).toFixed(2),
              diagnosa: diagnosa,
              catatan1: catatan1,
              catatan2: catatan2,
              catatan3: catatan3,
            },
          });
        }
      })
      .catch((err) => {
        console.log("ERor:: ", err);
        console.log("ERRRR:: ", err.response);
        // errorlog(err.response.data.message);
        state.errorlog = err.response.data.message;
        // window.alert(state.errorlog);
        handleClose();
      });
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
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
          <Paper
            elevation={10}
            style={{
              marginLeft: 25,
              marginRight: 25,
              padding: 15,
              height: "60vh",
            }}
          >
            <Grid
              container
              xs={12}
              md={12}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={12}>
                <Typography
                  textAlign="center"
                  fontSize="17px"
                  marginTop="100px"
                >
                  Masukkan Gambar Dicom Kanker Payudara
                </Typography>
              </Grid>
              <Grid item xs={2.2} md={2.2} marginTop="20px">
                <input
                  onChange={onSetFile}
                  type="file"
                  name="imgdicom"
                  required
                />
              </Grid>
              <Grid item xs={12} md={12} />
              <Grid item xs={3} md={3}>
                <Typography color="red" fontSize="13px">
                  {state.errorlog}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} marginTop="30px">
                <Grid container xs={12} md={12} justifyContent="center">
                  <Grid item>
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      // onClickCapture={handleToggle}
                      variant="contained"
                      sx={{ background: "#e43d84" }}
                    >
                      Classification
                    </Button>
                    <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open={open}
                      onClick={handleClose}
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
};

export default Diagnosis;
