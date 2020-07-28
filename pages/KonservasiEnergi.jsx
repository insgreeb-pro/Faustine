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
const title = "Konservasi Energi"

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

    <GridContent title={title}>
      <Container ukuran="1/1/span 2/span 4">
        <Cobachart />
      </Container>

      <Circular
        title="Energi terbarukan yang dihasilkan"
        ukuran="3/1/span 1/span 1"
        value="5"
        minV="0"
        maxV="100"
        unit="%"
        info="Cloud strategy one-sheet, for cloud native container based, come up with something buzzworthy, but low-hanging fruit."
      />

      <Number
        title="Energi terbarukan yang dihasilkan bulan ini"
        ukuran="3/2/span 1/span 1"
        value="3.2"
        unit="kwh/m2"
        info="Teams were able to drive adoption and awareness. Strategic high-level 30,000 ft view hire the best or strategic fit closing these latest prospects is like putting socks on an octopus touch base we've bootstrapped the model yet put a record on and see who dances."
      />

      <Carousel slides={slides} />
      <Buttondatagrafik />
      <Keterangan />
    </GridContent>
  </>
)
