import Head from "next/head"
import Button from "../components/Button"

const title = "Home"

const styles = {
  height: "100vh",
  width: "100vw",
  padding: "0 20%",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  background: "url(/img/gedungdtntf.jpg) no-repeat center center fixed",
  backgroundSize: "cover",
}

const heading = {
  width: "80%",
  fontSize: "2.5em",
  lineHeight: "1em",
  fontWeight: "700",
  textAlign: "center",
  whiteSpace: "normal",
  color: "#232323",
  marginBottom: "1%",
}

const caption = {
  fontSize: "1em",
  fontWeight: "500",
  textAlign: "center",
  lineHeight: "1.5em",
  whiteSpace: "normal",
  color: "#232323",
  marginBottom: "2%",
}

export default () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <div style={styles}>
      <p style={heading}>GEDUNG DEPARTEMEN TEKNIK NUKLIR TEKNIK FISIKA</p>
      <p style={caption}>
        Departemen Teknik Nuklir dan Teknik Fisika merupakan salah satu
        departemen di Fakultas Teknik Universitas Gadjah Mada yang berlokasi di
        Jalan Grafika 2, Yogyakarta 55281, Indonesia
      </p>

      <Button />
    </div>
  </>
)
