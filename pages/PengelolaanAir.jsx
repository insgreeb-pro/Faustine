import Head from "next/head"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Circular from "../components/Circular"
import Number from "../components/Number"
import Carousel from "../components/Carousel"
import Keterangan from "../components/Keterangan"
import Buttondatagrafik from "../components/Buttondatagrafik"
import { FaStar } from "react-icons/fa"

import StackedBarChart from "../components/StackedBarChart"

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

export default () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Sidebar activePage={title} />

    <GridContent title={title} kelas="pengelolaanair">
      <StackedBarChart />
      <Circular
        title="Persentase keran auto-stop"
        value="52"
        minV="0"
        maxV="100"
        thld="50"
        unit="%"
        info="Spinning our wheels put a record on and see who dances 4-blocker, that's mint, well done. Create spaces to explore what’s next."
      />
      <Number
        title="Rata-rata WELS rating keran bangunan"
        value="5.3"
        thld="0.3"
        info="Sorry i was triple muted manage expectations we're ahead of the one where do we stand on the latest client ask who's responsible for the ask for this request?."
      >
        <FaStar style={{ verticalAlign: "initial" }} />
      </Number>
      <Carousel slides={slides}>*Upaya lain yang dilakukan</Carousel>
      <Buttondatagrafik />
      <Keterangan />
    </GridContent>
  </>
)
