import Head from "next/head"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Circular from "../components/Circular"
import Number from "../components/Number"
import Carousel from "../components/Carousel"
import Keterangan from "../components/Keterangan"
import Cobacoba from "../components/sementara chart/cobachart"

const title = "Pengelolaan Bangunan Tingkat Lanjut"
const slides = [
  {
    source: "pengelolaanair1.jpg",
    judul: "Desain Minimalisir Pengunaan Air",
    isi:
      "Synergestic actionables i need to pee and then go to another meeting per my previous email but sorry i was triple muted. Gain traction strategic high-level 30,000 ft view looks great",
  },
  {
    source: "pengelolaanair2.jpg",
    judul: "Sistem Filter Air Terstandar",
    isi:
      "Turd polishing. But what's the real problem we're trying to solve here?",
  },
  {
    source: "pengelolaanair3.jpg",
    judul: "Sistem Daur Ulang Air",
    isi:
      "Drive awareness to increase engagement put it on the parking lot synergize productive mindfulness drop-dead date, nor poop, yet optimize for search",
  },
  {
    source: "pengelolaanair4.jpg",
    judul: "Hasil Uji Laboratorium",
    isi:
      "Out of the loop can we parallel path get all your ducks in a row time to open the kimono.",
  },
]

export default () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    {/* Sidebar dengan halaman aktif (Tata Lahan Tepat Guna) */}
    <Sidebar activePage={title} />

    {/* Menyusun konten dalam suatu grid*/}
    <GridContent title={title}>
      <Carousel slides={slides} />
    </GridContent>
  </>
)
