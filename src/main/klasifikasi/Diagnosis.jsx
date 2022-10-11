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
    nik: "",
    alamat: "",
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
        let diagnosa;
        let catatan1;
        let catatan2;
        let catatan3;
        state.imgkanker = res.data;
        console.log(" succes : ", state.imgkanker.prediksi);
        const hasilprediksi = res.data.prediksi;
        const hasilakurasi = res.data.akurasi;
        if (hasilprediksi == "stadium 1") {
          lvlkanker = "STADIUM 1";
          diagnosa =
            "Stadium I merupakan tahap paling awal dari kanker payudara yang berpotensi menyebar (invasif). Pada tahap ini, ukuran tumor masih sangat kecil ukuran kurang dari 2 cm dan belum menyebar ke kelenjar getah bening. Ditemukan sekelompok sel kanker dengan ukuran antara 0,2 milimeter sampai 2 milimeter di kelenjar getah bening. Pemeriksaan kanker payudara kurang lebih sebesar biji kurma yang akan merasakan sakit/nyeri, payudara membengkak atau memerah, puting payudara mengeluarkan cairan meski tidak menyusui. ";
          healsolusi =
            "Pada tahap ini, pengobatannya dilakukan adalah operasi pengangkatan sel kanker dilanjutkan dengan terapi radiasi pada area yang sebelumnya terserang kanker. Pada tahap ini, terapi hormon dan kemoterapi juga mungkin dianjurkan untuk mengurangi risiko kanker tumbuh kembali.";
          catatan1 =
            "Pasien mengalami kanker payudara STADIUM 1 , dengan ini pasien harus mengonsumsi obat dari resep dokter dan menjalani terapi.";
          catatan2 =
            "Penyakit yang di derita pasien mulai menyebar area puting payudara dan bisa merusak otak.";
          catatan3 =
            "Pada penyakit kanker payudara STADIUM 1 yang memiliki 3 bakteri.";
          navigate("/Hasildiagnosa", {
            state: {
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
              nama: state.namapasien,
              umur: state.umurpasien,
              tgl: state.tgllahir,
              medis: state.nomedis,
              nik : state.nik,
              alamat : state.alamat,
              diagnosa: diagnosa,
              catatan1: catatan1,
              catatan2: catatan2,
              catatan3: catatan3,
            },
          });
        } else if (hasilprediksi == "stadium 2") {
          lvlkanker = "STADIUM 2";
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
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
              nama: state.namapasien,
              umur: state.umurpasien,
              tgl: state.tgllahir,
              medis: state.nomedis,
              nik : state.nik,
              alamat : state.alamat,
              diagnosa: diagnosa,
              catatan1: catatan1,
              catatan2: catatan2,
              catatan3: catatan3,
            },
          });
        } else if (hasilprediksi == "stadium 3") {
          lvlkanker = "STADIUM 3";
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
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
              nama: state.namapasien,
              umur: state.umurpasien,
              tgl: state.tgllahir,
              medis: state.nomedis,
              nik : state.nik,
              alamat : state.alamat,
              diagnosa: diagnosa,
              catatan1: catatan1,
              catatan2: catatan2,
              catatan3: catatan3,
            },
          });
        } else if (hasilprediksi == "stadium 4") {
          lvlkanker = "STADIUM 4";
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
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
              nama: state.namapasien,
              umur: state.umurpasien,
              tgl: state.tgllahir,
              medis: state.nomedis,
              nik : state.nik,
              alamat : state.alamat,
              diagnosa: diagnosa,
              catatan1: catatan1,
              catatan2: catatan2,
              catatan3: catatan3,
            },
          });
        } else {
          lvlkanker = "NORMAL";
          healsolusi = "-";
          navigate("/Hasildiagnosa", {
            state: {
              lvlkanker: lvlkanker,
              healsolusi: healsolusi,
              hasilakurasi: parseFloat(hasilakurasi * 100).toFixed(2),
              nama: state.namapasien,
              umur: state.umurpasien,
              tgl: state.tgllahir,
              medis: state.nomedis,
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
            height: "60vh",
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
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="nik"
                  name="nik"
                  required
                  id="nik"
                  onChange={onHandledChanged}
                  label="NIK"
                  size="small"
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="alamat"
                  name="alamat"
                  required
                  id="alamat"
                  onChange={onHandledChanged}
                  label="Alamat"
                  size="small"
                  fullWidth
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
