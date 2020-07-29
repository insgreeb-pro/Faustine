import Head from "next/head"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Circular from "../components/Circular"
import Number from "../components/Number"
import Carousel from "../components/Carousel"
import Keterangan from "../components/Keterangan"
import Buttondatagrafik from "../components/Buttondatagrafik"
import { FaStar } from "react-icons/fa"

import { Container } from "../components/Container"
import Cobachart from "../components/sementara chart/cobachart"

// Judul halaman web
const title = "Pengelolaan Limbah dan Material"

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

    <GridContent title={title} kelas="pengelolaanlimbahdanmaterial">
      <Number
        title="Nilai ODP"
        ukuran="1/1/span 1/span 1"
        value="0"
        thld="-0.1" //REVERSE YAH
        info="Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent."
      />

      <Number
        title="Nilai GWP"
        ukuran="1/2/span 1/span 1"
        value="0"
        thld="-0.1" //REVERSE YAH
        info="Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have."
      />

      <Number
        title="Merkuri pada sistem pencahayaan"
        ukuran="1/3/span 1/span 1"
        value="1"
        thld="0" //REVERSE YAH
        unit="g"
        info="Groom the backlog t-shaped individual helicopter view. Knowledge process outsourcing all hands on deck knowledge process outsourcing. T-shaped individual pro-sumer software."
      />

      <Carousel slides={slides} />
      <Keterangan />
    </GridContent>
  </>
)
