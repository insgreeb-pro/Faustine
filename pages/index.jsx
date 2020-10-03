import Head from "next/head"
import Link from "next/link"
import Button from "react-bootstrap/Button"

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
  fontSize: "2.5em",
  lineHeight: "1em",
  fontWeight: "700",
  whiteSpace: "normal",
  color: "white",
  marginBottom: "1%",
  textShadow: "2px 2px 6px #232323",
}

const caption = {
  fontSize: "1.3em",
  fontWeight: "500",
  lineHeight: "1.5em",
  whiteSpace: "normal",
  color: "white",
  marginBottom: "2%",
  textShadow: "2px 2px 6px #232323",
}

function BEMS() {
  return (
    <Link href={`/TataLahanTepatGuna`}>
      <Button
        style={{
          width: "35%",
          fontSize: "1.5em",
          cursor: "pointer",
          borderRadius: "30px",
          backgroundColor: "#EF476F",
          color: "F3EFF5",
        }}
        block
      >
        BEMS DTNTF UGM
      </Button>
    </Link>
  )
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
        <p style={heading}>Performansi Bangunan Hijau</p>
        <p style={caption}>
          Performansi Bangunan Hijau menunjukkan bagaimana suatu bangunan
          memengaruhi lingkungan di sekitar dan pengguna bangunan. Beberapa
          parameter yang diamati dalam bangunan hijau adalah tata lahan,
          konservasi energi, pengelolaan air, kesehatan dan kenyamanan, limbah
          dan material, dan manajemen bangunan.
        </p>
        <p style={heading}>Tujuan Pemantauan</p>
        <p style={caption}>
          Goal kami dalam project ini yaitu menyediakan dashboard sistem
          pemantauan untuk memonitoring beberapa aspek lingkungan pada bangunan
          Departemen Teknik Nuklir dan Teknik Fisika. Kami sedang bekerja untuk
          menuju proyek "kampus biru" UGM dengan konsep green and smart building
          menggunakan sistem yang saling terintegrasi pada seluruh bangunan di
          UGM.
        </p>
        {BEMS()}
      </div>
    </div>
  </>
)
