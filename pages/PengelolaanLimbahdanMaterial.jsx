import Head from "next/head"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Selector from "../components/data/Selector"
import Carousel from "../components/Carousel"
import Keterangan from "../components/Keterangan"
import Copyright from "../components/Copyright"

// Judul halaman web
const title = "Pengelolaan Limbah dan Material"

// Isi slideshow
const slides = [
  // {
  //   source: "pengelolaanlimbah1.jpg",
  //   judul: "Material Ramah Lingkungan",
  //   isi:
  //     "I think this should be fairly easy so if you just want to have a look we exceed the clients' expectations is this the best we can do it looks a bit empty, try to make everything bigger",
  // },
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

const data = [
  {
    tipe: "Number",
    props: {
      title: "Nilai ODP",
      ukuran: "1/1/span 1/span 1",
      value: "0",
      thld: "-0.1", //REVERSE YAH
      info:
        "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
    },
  },
  {
    tipe: "Number",
    props: {
      title: "Nilai GWP",
      ukuran: "1/2/span 1/span 1",
      value: "0",
      thld: "-0.1", //REVERSE YAH
      info:
        "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
    },
  },
  {
    tipe: "Number",
    props: {
      title: "Merkuri pada sistem pencahayaan",
      ukuran: "1/3/span 1/span 1",
      value: "1",
      thld: "0", //REVERSE YAH
      unit: "g",
      info:
        "Groom the backlog t-shaped individual helicopter view. Knowledge process outsourcing all hands on deck knowledge process outsourcing. T-shaped individual pro-sumer software.",
    },
  },
]

const render = data.map(({ tipe, props }, idx) => {
  return <Selector key={idx} tipe={tipe} props={props} />
})
export default () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Sidebar activePage={title} />

    <GridContent
      title={title}
      kelas="pengelolaanlimbahdanmaterial"
      caption="Tahap daur hidup sebuah gedung terdiri dari konstruksi, operasi, pemeliharaan, dan pembongkaran. Untuk itu, kategori ini berusaha untuk mengarahkan pengguna berpartisipasi menjaga operasi gedung yang ramah lingkungan melalui penggunaan material atau produk dalam setiap tahap konstruksi fit out, operasi dan pemeliharaan ruang interiornya. Parameter yang diamati adalah refrigeran yang digunakan, pembelian material, dan pengelolaan limbah"
    >
      {render}
      <Carousel slides={slides}>Upaya lain yang dilakukan</Carousel>
      <Keterangan />
      <Copyright />
    </GridContent>
  </>
)
