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
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/Firebase";

const Diagnosis = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    imgdicom: "",
    imgkanker: "",
    errorlog: "",
    namapasien: "",
    umurpasien: "",
    tgllahir: "",
    nomedis: "",
  });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/prediksi", {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {
  //       // check if the data is populated
  //       console.log("table =", response);
  //       // setStock(response.data.responseData.data);
  //       // console.log("namalengkap =", stockdatapegawai);
  //     })
  //     .catch((err) => {
  //       console.log("ERRRR:: ", err);
  //     });
  // }, []);
  const onHandledChanged = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const onSetFile = (e) => {
    const file = e.target.files[0];
    setState({
      ...state,
      imgdicom: file,
    });
  };

  // const rrequired = () => {
  //   onbtndiagnosa();
  // };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const onbtndiagnosa = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("files", state.imgdicom);

    console.log(state);
    axios
      .post("https://cancerpydara.herokuapp.com/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // const result = res.data.result;
        console.log("post succes : ", res);
        let lvlkanker;
        let healsolusi;
        state.imgkanker = res.data;
        console.log(" succes : ", state.imgkanker.prediksi);
        const hasilprediksi = res.data.prediksi;
        const hasilakurasi = res.data.akurasi;
        if (hasilprediksi == "stadium 1") {
          lvlkanker = "STADIUM 1";
          healsolusi =
            "Pada tahap ini, pengobatannya dilakukan adalah operasi pengangkatan sel kanker dilanjutkan dengan terapi radiasi pada area yang sebelumnya terserang kanker. Pada tahap ini, terapi hormon dan kemoterapi juga mungkin dianjurkan untuk mengurangi risiko kanker tumbuh kembali.";
          navigate("/hasil", {
            state: {
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
            },
          });
        } else if (hasilprediksi == "stadium 2") {
          lvlkanker = "STADIUM 2";
          healsolusi =
            "Cara mengobati kanker payudara pada stadium ini bisa dilakukan dengan pembedahan atau pengangkatan tumor, terapi radiasi, pengangkatan payudara (masektomi), kemoterapi untuk mengecilkan ukuran payudara sebelum operasi, serta terapi hormon dan terapi bertarget. ";
          navigate("/hasil", {
            state: {
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
            },
          });
        } else if (hasilprediksi == "stadium 3") {
          lvlkanker = "STADIUM 3";
          healsolusi =
            "Pengobatan untuk kanker payudara stadium 3 biasanya melibatkan kombinasi operasi (lumpektomi atau mastektomi) dan kemoterapi untuk mengecilkan tumor sebelum operasi. Setelah itu, dilanjutkan dengan terapi radiasi pada dinding dada atau kelenjar getah bening.";
          navigate("/hasil", {
            state: {
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
            },
          });
        } else if (hasilprediksi == "stadium 4") {
          lvlkanker = "STADIUM 4";
          healsolusi =
            "Pilihan pengobatan untuk kanker payudara stadium 4 bertujuan untuk meringankan gejala, meningkatkan kualitas hidup, dan memperpanjang rentang hidup. Cara pengobatan kanker payudara yang bisa dilakukan meliputi terapi hormon, terapi bertarget, kemoterapi, imunoterapi, radiasi, atau pembedahan.";
          navigate("/hasil", {
            state: {
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
            },
          });
        } else {
          lvlkanker = "NORMAL";
          healsolusi = "-";
          navigate("/hasil", {
            state: {
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
            },
          });
        }
      })
      .catch((err) => {
        console.log("ERRRR:: ", err.response);
        // errorlog(err.response.data.message);
        state.errorlog = err.response.data.message;
        handleClose();
      });
  };

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
        <Paper
          elevation={10}
          style={{
            marginLeft: 25,
            marginRight: 25,
            padding: 15,
            height: "50vh",
          }}
        >
          <form onSubmit={onbtndiagnosa} encType="multipart/form-data">
            <Grid container xs={12} md={12} justifyContent="center">
              <Grid item xs={12} md={12} justifySelf="center">
                <Typography textAlign="center" fontSize="20px" marginTop="20px">
                  <b>Masukkan Data Pasien</b>
                </Typography>
              </Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="namapasien"
                  name="namapasien"
                  required
                  id="namapasien"
                  onChange={onHandledChanged}
                  label="Nama Pasien"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="umurpasien"
                  name="umurpasien"
                  required
                  id="umurpasien"
                  onChange={onHandledChanged}
                  label="Umur Pasien"
                  size="small"
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="tgllahir"
                  name="tgllahir"
                  required
                  id="tgllahir"
                  onChange={onHandledChanged}
                  label="Tanggal Lahir"
                  size="small"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true, required: true }}
                />
              </Grid>
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="nomedis"
                  name="nomedis"
                  required
                  id="nomedis"
                  onChange={onHandledChanged}
                  label="No.Rekam Medis"
                  size="small"
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={2.2} md={2.2} marginTop="20px">
                {/* <DwvComponent fileimage={fileimage} /> */}
                <input onChange={onSetFile} required type="file" />
              </Grid>
              <Grid item xs={12} md={12} />
              <Grid item xs={3} md={3}>
                <Typography color="red" fontSize="13px">
                  {state.errorlog}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} marginTop="20px" marginBottom="3ch">
                <Grid container xs={12} md={12} justifyContent="center">
                  <Grid item marginTop="20px">
                    <Button
                      type="submit"
                      onClick={onbtndiagnosa}
                      onClickCapture={handleToggle}
                      variant="contained"
                      sx={{ background: "#e43d84" }}
                    >
                      Detection
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
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Diagnosis;
