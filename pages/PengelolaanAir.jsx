import Head from "next/head"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Selector from "../components/data/Selector"
import Carousel from "../components/Carousel"
import Keterangan from "../components/Keterangan"
import { FaStar } from "react-icons/fa"
import GrafikAir from "../components/grafik/GrafikAir"
import Copyright from "../components/Copyright"

// Judul halaman web
const title = "Pengelolaan Air"

// Isi slideshow
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

const data = [
  {
    tipe: "Circular",
    props: {
      title: "Persentase keran auto-stop",
      value: "52",
      minV: "0",
      maxV: "100",
      thld: "50",
      unit: "%",
      info:
        "Spinning our wheels put a record on and see who dances 4-blocker, that's mint, well done. Create spaces to explore what’s next.",
    },
  },
  {
    tipe: "Number",
    props: {
      title: "Rata-rata WELS rating keran bangunan",
      value: "5.3",
      thld: "0.3",
      info:
        "Sorry i was triple muted manage expectations we're ahead of the one where do we stand on the latest client ask who's responsible for the ask for this request?.",
      icon: <FaStar style={{ verticalAlign: "initial" }} />,
    },
  },
]

const render = data.map(({ tipe, props }) => (
  <Selector key={props} tipe={tipe} props={props} />
))

export default () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Sidebar activePage={title} />

    <GridContent
      title={title}
      kelas="pengelolaanair"
      caption="Upaya penghematan air bersih menjadi salah satu fokus utama dalam agenda pihak pengelola gedung karena Indonesia hanya memiliki sekitar 4,85% ketersediaan air bersih. Maka dari itu, kriteria ini hadir untuk meningkatkan kesadaran akan pentingnya melakukan penghematan air penggunaan air bersih yang berkaitan dengan penggunaan operasional ruang. Parameter yang digunakan adalah efisiensi air, kualitas air, daur ulang/sumber air alternatif."
    >
      <GrafikAir />
      {render}
      <Carousel slides={slides}>Upaya lain yang dilakukan</Carousel>
      <Keterangan />
      <Copyright />
    </GridContent>
  </>
)
