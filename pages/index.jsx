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
  color: "white",
  marginBottom: "1%",
  textShadow: "2px 2px 6px #232323",
}

const caption = {
  fontSize: "1em",
  fontWeight: "500",
  textAlign: "center",
  lineHeight: "1.5em",
  whiteSpace: "normal",
  color: "white",
  marginBottom: "2%",
  textShadow: "2px 2px 6px #232323",
}

export default () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <div style={styles}>
      <p style={heading}>GEDUNG DEPARTEMEN TEKNIK NUKLIR TEKNIK FISIKA</p>
      <p style={caption}>
        {/* Departemen Teknik Nuklir dan Teknik Fisika merupakan salah satu
        departemen di Fakultas Teknik Universitas Gadjah Mada yang berlokasi di
        Jalan Grafika 2, Yogyakarta 55281, Indonesia */}
        BEMS (Building Environment Monitoring System) merupakan suatu sistem
        yang mengamati, mencatat, mengukur atau mendokumentasi beberapa
        parameter seperti penggunaan energi, suhu, kelembaban, cahaya, dan
        kualitas udara sebagai tolok ukur dalam suatu siklus waktu tertentu yang
        mengacu pada Standar Nasional Indonesia (SNI). Sistem monitoring ini
        bergungsi untuk memantau operasional data center dari gangguan
        lingkungan dalam aspek kenyamanan. keamanan, kesehatan, dan
        produktivitas penghuni juga dapat digunakan untuk manajemen bangunan.
      </p>

      <Button />
    </div>
  </>
)
