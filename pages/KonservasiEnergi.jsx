import Head from "next/head"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Selector from "../components/data/Selector"
import Carousel from "../components/Carousel"
import Keterangan from "../components/Keterangan"
import GrafikEnergi from "../components/grafik/GrafikEnergi"
import Copyright from "../components/Copyright"

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
  // {
  //   source: "konservasienergi5.jpg",
  //   judul: "Teknologi Fotovoltaik",
  //   isi:
  //     "Try to make everything bigger, so you can get my logo from facebook. Can you make the font bigger?",
  // },
]

const data = [
  {
    tipe: "Circular",
    props: {
      title: "Energi terbarukan yang dihasilkan",
      value: "5",
      minV: "0",
      maxV: "100",
      unit: "%",
      info:
        "Cloud strategy one-sheet, for cloud native container based, come up with something buzzworthy, but low-hanging fruit.",
    },
  },
  {
    tipe: "Number",
    props: {
      title: "Energi terbarukan yang dihasilkan bulan ini",
      value: "3.2",
      unit: "kwh/m2",
      info:
        "Teams were able to drive adoption and awareness. Strategic high-level 30,000 ft view hire the best or strategic fit closing these latest prospects is like putting socks on an octopus touch base we've bootstrapped the model yet put a record on and see who dances.",
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
      kelas="konservasienergi"
      caption="Prinsip utama dari konservasi energi adalah efisiensi energi melalui pemanfaatan atau pemakaian teknologi yang membutuhkan energi lebih rendah dalam melakukan fungsi yang sama. Parameter yang diperhatikan adalah performansi bangunan dengan energi minimal, pengujian, recommissioning/retrocommissioning, implementasi sistem pemantauan dan kendali energi, operasi dan pemeliharaan, serta pengurangan emisi energi"
    >
      <GrafikEnergi />
      {render}
      <Carousel slides={slides}>Upaya lain yang dilakukan</Carousel>
      <Keterangan />
      <div></div>
      <div></div>
      <Copyright />
    </GridContent>
  </>
)
