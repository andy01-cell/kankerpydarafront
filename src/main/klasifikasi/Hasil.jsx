import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { bgall } from "../../assets/exportimage";
import { useLocation } from "react-router-dom";

const Hasil = () => {
  let imagedicom = localStorage.getItem("gambar");
  const datapredik = useLocation();
  console.log("data", datapredik.state.lvlkanker);
  const [state, setState] = useState({
    imgkanker: "",
  });
  // useEffect(() => {
  //   axios
  //     .get("localhost:5000//static/clasifer/clasifier.jpg", {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {
  //       // check if the data is populated
  //       console.log("table =", response);
  //       state.imgkanker = response.data;
  //       // setStock(response.data.responseData.data);
  //       // console.log("namalengkap =", stockdatapegawai);
  //     })
  //     .catch((err) => {
  //       console.log("ERRRR:: ", err);
  //     });
  // }, []);
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
        <Grid container justifyContent="space-between">
          <Grid item xs={3.8} md={3.8}>
            <Grid container xs={12} md={12}>
              <Grid item xs={12} md={12}>
                <Box
                  component="img"
                  sx={{
                    width: {
                      md: 350,
                      xs: 60,
                    },
                  }}
                  alt="The house from the offer."
                  src={
                    "https://cancerpydara.herokuapp.com//static/clasifer/clasifier.jpg"
                  }
                />
              </Grid>
              <Grid item xs={6} md={6} marginTop="20px">
                <Typography
                  variant="p"
                  fontSize="20px"
                  fontFamily="sans-serif"
                  textAlign="justify"
                >
                  <b>{datapredik.state.lvlkanker}</b>
                </Typography>
              </Grid>
              <Grid item xs={3} md={3} marginTop="15px">
                <Box
                  sx={{
                    p: 1,
                    // height: "10px",
                    background: "#e43d84",
                    color: "white",
                    borderRadius: "50px",
                  }}
                  textAlign="center"
                >
                  {datapredik.state.hasilakurasi}%
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3.8} md={7.8}>
            <Typography
              variant="p"
              fontSize="38px"
              fontFamily="sans-serif"
              textAlign="justify"
            >
              <b>DIAGNOSA</b>
            </Typography>
            <hr
              color="#e12454"
              style={{
                width: "40px",
                height: "3.5px",
                marginLeft: "0px",
                marginTop: "20px",
              }}
            ></hr>
            <Typography
              fontFamily="sans-serif"
              fontSize="16px"
              textAlign="justify"
              marginTop="25px"
              color="#6F8BA4"
            >
              Sel kanker bisa terbentuk di kelenjar yang menghasilkan susu
              (lobulus) atau di saluran yang membawa air susu dari kelenjar ke
              puting payudara (ductus). Selain itu, kanker juga bisa terbentuk
              di jaringan lemak atau jaringan ikat di dalam payudara. Satu hal
              yang perlu diketahui, kanker payudara bisa menyerang siapa saja,
              baik wanita maupun pria. Jika dilihat dari tingkat keparahannya,
              kanker payudara dibedakan menjadi 5 stadium. Tidak hanya
              menandakan tingkat keparahan, stadium kanker juga menjadi acuan
              dalam menentukan cara mengobati kanker payudara.
            </Typography>
            <Typography
              fontSize="18px"
              fontFamily="sans-serif"
              textAlign="justify"
              color="#223a66"
              marginTop="15px"
            >
              <b>Healing Solution :</b>
            </Typography>
            <Typography
              fontFamily="sans-serif"
              fontSize="16px"
              textAlign="justify"
              color="#6F8BA4"
            >
              {datapredik.state.healsolusi}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hasil;
