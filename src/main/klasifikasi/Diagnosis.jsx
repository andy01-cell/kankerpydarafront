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
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, storage } from "../../config/Firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const Diagnosis = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    imgdicom: "",
    imgdicomurl: null,
    imgkanker: "",
    errorlog: "",
    nik: "",
    tgllahir: "",
    namapasien: "",
    umurpasien: "",
    nomedis: "",
    alamat: "",
  });

  const [errors, setErrors] = useState({
    nik: "",
    tgllahir: "",
    namapasien: "",
    umurpasien: "",
    nomedis: "",
    alamat: "",
  });

  const validateNik = (nik) => {
    console.log("nik");
    if (!nik) {
      setErrors((errors) => ({ ...errors, nik: "Nik harus diisi" }));
      return false;
    } else if (nik.length != 16) {
      setErrors((errors) => ({ ...errors, nik: "Nik harus 16 digit" }));
      return false;
    } else {
      setErrors((errors) => ({ ...errors, nik: "" }));
      return true;
    }
  };
  const validatetgl = (tgllahir) => {
    console.log("tgl");
    if (!tgllahir) {
      setErrors((errors) => ({
        ...errors,
        tgllahir: "Tanggal lahir harus diisi",
      }));
      return false;
    } else {
      setErrors((errors) => ({ ...errors, tgllahir: "" }));
      return true;
    }
  };
  const validateNama = (namapasien) => {
    console.log("nama");
    if (!namapasien) {
      setErrors((errors) => ({ ...errors, namapasien: "Nama harus diisi" }));
      return false;
    } else if (namapasien.length < 3) {
      setErrors((errors) => ({
        ...errors,
        namapasien: "Nama minimal 3 karakter",
      }));
      return false;
    } else {
      setErrors((errors) => ({ ...errors, namapasien: "" }));
      return true;
    }
  };
  const validateumur = (umurpasien) => {
    console.log("umur");
    if (!umurpasien) {
      setErrors((errors) => ({
        ...errors,
        umurpasien: "Umur Pasien harus diisi",
      }));
      return false;
    } else if (umurpasien.length > 3) {
      setErrors((errors) => ({
        ...errors,
        umurpasien: "umur maximal 3 karakter",
      }));
      return false;
    } else {
      setErrors((errors) => ({ ...errors, umurpasien: "" }));
      return true;
    }
  };
  const validateNomedis = (nomedis) => {
    console.log("medis");
    if (!nomedis) {
      setErrors((errors) => ({ ...errors, nomedis: "No.Medis harus diisi" }));
      return false;
    } else {
      setErrors((errors) => ({ ...errors, nomedis: "" }));
      return true;
    }
  };
  const validatealamat = (alamat) => {
    console.log("alamat");
    if (!alamat) {
      setErrors((errors) => ({ ...errors, alamat: "Alamat harus diisi" }));
      return false;
    } else {
      setErrors((errors) => ({ ...errors, alamat: "" }));
      return true;
    }
  };

  const onHandledChanged = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    switch (event.target.name) {
      case "nik":
        validateNik(event.target.value);
        break;
      case "tgllahir":
        validatetgl(event.target.value);
        break;
      case "namapasien":
        validateNama(event.target.value);
        break;
      case "umurpasien":
        validateumur(event.target.value);
        break;
      case "nomedis":
        validateNomedis(event.target.value);
        break;
      case "alamat":
        validatealamat(event.target.value);
        break;
      default:
        break;
    }
  };

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
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleNikChange = async (event) => {
    event.preventDefault();
    const querySnapshot = await getDocs(collection(db, "pasien"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data._nik === event.target.value) {
        setState({
          ...state,
          nik: data._nik,
          namapasien: data._namapasien,
          tgllahir: data._tgllahir,
          umurpasien: data._umurpasien,
          nomedis: data._nomedis,
          alamat: data._alamat,
          imgdicom: data.gambar,
        });
      }
      console.log("gambar = ", data._nik);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      validateNik(state.nik) &&
      validatetgl(state.tgllahir) &&
      validateNama(state.namapasien) &&
      validateumur(state.umurpasien) &&
      validateNomedis(state.nomedis) &&
      validatealamat(state.alamat)
    ) {
      onbtndiagnosa(event);
    }
  };

  const onbtndiagnosa = async (event) => {
    event.preventDefault();
    setOpen(!open);
    const data = new FormData();
    data.append("nik", state.nik);
    data.append("tgllahir", state.tgllahir);
    data.append("umurpasien", state.umurpasien);
    data.append("alamat", state.alamat);
    data.append("namapasien", state.namapasien);
    data.append("no.medis", state.nomedis);
    data.append("files", state.imgdicom);

    console.log(state);

    axios
      .post("http://localhost:5000/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // tambahkan data ke Firestore
        console.log("file");

        if (state.imgdicom instanceof File) {
          console.log("file");
          const docRef = addDoc(collection(db, "pasien"), {
            _nik: state.nik,
            _namapasien: state.namapasien,
            _tgllahir: state.tgllahir,
            _umurpasien: state.umurpasien,
            _alamat: state.alamat,
            _nomedis: state.nomedis,
            gambar: state.imgdicom.name,
          });
        } else {
          console.log("lanjutkan");
        }
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
              nik: state.nik,
              alamat: state.alamat,
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
              nik: state.nik,
              alamat: state.alamat,
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
              nik: state.nik,
              alamat: state.alamat,
              diagnosa: diagnosa,
              catatan1: catatan1,
              catatan2: catatan2,
              catatan3: catatan3,
            },
          });
        } else {
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
              nik: state.nik,
              alamat: state.alamat,
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
            <Grid container xs={12} md={12} justifyContent="center">
              <Grid item xs={12} md={12} justifySelf="center">
                <Typography textAlign="center" fontSize="20px" marginTop="20px">
                  <b>Masukkan Data Pasien</b>
                </Typography>
              </Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="nik"
                  name="nik"
                  label="NIK"
                  size="small"
                  fullWidth
                  type="number"
                  value={state.nik}
                  onChange={onHandledChanged}
                  onChangeCapture={handleNikChange}
                  error={!!errors.nik}
                  helperText={errors.nik}
                />
              </Grid>
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="tgllahir"
                  name="tgllahir"
                  label="Tanggal Lahir"
                  size="small"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true, required: true }}
                  value={state.tgllahir}
                  onChange={onHandledChanged}
                  error={!!errors.tgllahir}
                  helperText={errors.tgllahir}
                />
              </Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="namapasien"
                  name="namapasien"
                  label="Nama Pasien"
                  size="small"
                  fullWidth
                  value={state.namapasien}
                  onChange={onHandledChanged}
                  error={!!errors.namapasien}
                  helperText={errors.namapasien}
                />
              </Grid>
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="umurpasien"
                  name="umurpasien"
                  label="Umur Pasien"
                  size="small"
                  fullWidth
                  type="number"
                  value={state.umurpasien}
                  onChange={onHandledChanged}
                  error={!!errors.umurpasien}
                  helperText={errors.umurpasien}
                />
              </Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="nomedis"
                  name="nomedis"
                  label="No.Rekam Medis"
                  size="small"
                  fullWidth
                  type="number"
                  value={state.nomedis}
                  onChange={onHandledChanged}
                  error={!!errors.nomedis}
                  helperText={errors.nomedis}
                />
              </Grid>
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={5} md={5} marginTop="20px">
                <TextField
                  autoComplete="alamat"
                  name="alamat"
                  label="Alamat"
                  size="small"
                  fullWidth
                  value={state.alamat}
                  onChange={onHandledChanged}
                  error={!!errors.alamat}
                  helperText={errors.alamat}
                />
              </Grid>
              <Grid item xs={2.2} md={2.2} marginTop="20px">
                {/* <DwvComponent fileimage={fileimage} /> */}
                {/* tombol upload gambar */}
                {state.imgdicom ? (
                  <input
                    value={state.imgdicom}
                    type="url"
                    name="imgdicom"
                    readOnly
                  />
                ) : (
                  <input
                    onChange={onSetFile}
                    type="file"
                    name="imgdicom"
                    required
                  />
                )}
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
