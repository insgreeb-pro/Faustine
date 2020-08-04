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
    source: "pengelolaanlimbah1.jpg",
    judul: "Material Ramah Lingkungan",
    isi:
      "I think this should be fairly easy so if you just want to have a look we exceed the clients' expectations is this the best we can do it looks a bit empty, try to make everything bigger",
  },
  {
    source: "pengelolaanlimbah2.jpg",
    judul: "Lampu Rendah Merkuri",
    isi:
      "Turd polishing. But what's the real problem we're trying to solve here?",
  },
  {
    source: "pengelolaanlimbah3.jpg",
    judul: "Tempat Sampah terpisah",
    isi:
      "Drive awareness to increase engagement put it on the parking lot synergize productive mindfulness drop-dead date, nor poop, yet optimize for search",
  },
  {
    source: "pengelolaanlimbah4.jpg",
    judul: "Prosedur Daur Ulang",
    isi:
      "Out of the loop can we parallel path get all your ducks in a row time to open the kimono.",
  },
  {
    source: "pengelolaanlimbah5.jpg",
    judul: "Pengurangan Kemasan Plastik",
    isi:
      "Out of the loop can we parallel path get all your ducks in a row time to open the kimono.",
  },
  {
    source: "pengelolaanlimbah6.jpg",
    judul: "Pengelolaan Limbah Hasil Renovasi",
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
