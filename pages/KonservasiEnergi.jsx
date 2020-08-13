import Head from "next/head"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Circular from "../components/Circular"
import Number from "../components/Number"
import Carousel from "../components/Carousel"
import Keterangan from "../components/Keterangan"
import Buttondatagrafik from "../components/Buttondatagrafik"
import LineChart from "../components/LineChart"

// Judul halaman web
const title = "Konservasi Energi"

// Isi slideshow
const slides = [
  {
    source: "konservasienergi1.jpg",
    judul: "Penghematan Konsumsi Energi untuk Pencahayaan",
    isi:
      "Synergestic actionables i need to pee and then go to another meeting per my previous email.",
  },
  {
    source: "konservasienergi2.jpg",
    judul: "Menggunakan Ballast Frekuensi Tinggi/LED",
    isi:
      "Turd polishing. But what's the real problem we're trying to solve here?",
  },
  {
    source: "konservasienergi3.jpg",
    judul: "Efisiensi Sistem Pendingin",
    isi:
      "Drive awareness to increase engagement put it on the parking lot synergize productive mindfulness drop-dead date, nor poop, yet optimize for search",
  },
  {
    source: "konservasienergi4.jpg",
    judul: "Panduan Pengoperasian dan Pemeliharaan AC",
    isi:
      "That's great, but can you make it work for ie 2 please could you solutionize that for me, but mmm, exactly like that, but different",
  },
  {
    source: "konservasienergi5.jpg",
    judul: "Teknologi Fotovoltaik",
    isi:
      "Try to make everything bigger, so you can get my logo from facebook. Can you make the font bigger?",
  },
]

export default () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Sidebar activePage={title} />

    <GridContent title={title} kelas="konservasienergi">
      <LineChart />

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

      <Carousel slides={slides}>*Upaya lain yang dilakukan</Carousel>
      <Buttondatagrafik />
      <Keterangan />
    </GridContent>
  </>
)
