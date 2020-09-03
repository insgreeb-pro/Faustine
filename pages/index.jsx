import Head from "next/head"
import Button from "../components/Button"

const title = "Home"

const styles = {
  height: "150vh",
  width: "150vh",
  borderRadius: "50%",
  position: "absolute",
  top: "-30vh",
  left: "-60vh",
  padding: "0 1% 0 63vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(6,214,160,0.8)",
}

const heading = {
  width: "80%",
  fontSize: "3em",
  lineHeight: "1em",
  fontWeight: "700",
  whiteSpace: "normal",
  color: "white",
  marginBottom: "1%",
  textShadow: "2px 2px 6px #232323",
}

const caption = {
  fontSize: "1em",
  fontWeight: "500",
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
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        zIndex: "-1",
        background: "url(/img/gedungdtntf.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    ></div>
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "absolute",
        zIndex: "-1",
      }}
    >
      <div style={styles}>
        <p style={heading}>BEMS</p>
        <p style={caption}>
          BEMS (Building Environment Monitoring System) merupakan suatu sistem
          yang mengamati, mencatat, mengukur atau mendokumentasi beberapa
          parameter seperti penggunaan energi, suhu, kelembaban, cahaya, dan
          kualitas udara sebagai tolok ukur dalam suatu siklus waktu tertentu
          yang mengacu pada Standar Nasional Indonesia (SNI). Sistem monitoring
          ini bergungsi untuk memantau operasional data center dari gangguan
          lingkungan dalam aspek kenyamanan. keamanan, kesehatan, dan
          produktivitas penghuni juga dapat digunakan untuk manajemen bangunan.
        </p>
        <Button />
      </div>
    </div>
  </>
)
