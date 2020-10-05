import Head from "next/head"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Carousel from "../components/Carousel"
import Keterangan from "../components/Keterangan"
import Selector from "../components/data/Selector"
import Lantai1 from "../components/denah/Lantai1"
import Lantai2 from "../components/denah/Lantai2"
import Copyright from "../components/Copyright"

// Judul halaman web
const title = "Kesehatan dan Kenyamanan"

// Isi slideshow
const slides = [
  {
    source: "kesehatankenyamanan1.jpg",
    judul: "Kebijakan Dilarang Merokok",
    isi:
      "I got your invoice...it seems really high, why did you charge so much we need to make the new version clean and sexy",
  },
  {
    source: "kesehatankenyamanan2.jpg",
    judul: "Ventilasi dengan Filter",
    isi:
      "There are more projects lined up charge extra the next time can you make it stand out more?",
  },
  // {
  //   source: "kesehatankenyamanan3.jpg",
  //   judul: "Audit IAQ",
  //   isi:
  //     "There is too much white space can we try some other colours maybe doing some work for us 'pro bono' will really add to your portfolio i promise you might wanna give it another shot.",
  // },
  // {
  //   source: "kesehatankenyamanan4.jpg",
  //   judul: "Konsentrasi Gas Pencemar",
  //   isi:
  //     "There are more projects lined up charge extra the next time can you make it stand out more?",
  // },
  {
    source: "kesehatankenyamanan5.jpg",
    judul: "Tingkat Pencahayaan Sesuai Standar",
    isi:
      "We exceed the clients' expectations can you make it pop make it pop so it's great, can you add a beard though nor can you pimp this powerpoint.",
  },
  // {
  //   source: "kesehatankenyamanan6.jpg",
  //   judul: "Lampu Tiga tingkat",
  //   isi:
  //     "I know you've made thirty iterations but can we go back to the first one that was the best version the target audience is makes and famles",
  // },
  // {
  //   source: "kesehatankenyamanan7.jpg",
  //   judul: "Minimalisir Getaran",
  //   isi:
  //     "Submit your meaningless business jargon to be used on the site! thanks for taking the time to make the website,",
  // },
  {
    source: "kesehatankenyamanan8.jpg",
    judul: "Pembasmian Hama",
    isi:
      "I really think this could go viral, for try a more powerful colour, for in an ideal world. Make it pop the flier should feel like a warm handshake.",
  },
  {
    source: "kesehatankenyamanan9.jpg",
    judul: "Kebersihan Gedung",
    isi:
      "Can you make the logo bigger yes bigger bigger still the logo is too big we have big contacts we will promote you,",
  },
]

const data = [
  {
    tipe: "Number",
    props: {
      title: "Jumlah kuman",
      value: "700",
      thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
      unit: "kol/m3",
      info:
        "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
    },
  },
  {
    tipe: "Circular",
    props: {
      title: "Kepuasan pengguna gedung",
      value: "3.5",
      minV: "0",
      maxV: "5",
      unit: "",
      thld: "3",
      info:
        "Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom",
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
      kelas="kesehatandankenyamanan"
      caption="Kategori ini bertujuan untuk mencegah masalah kulaitas udara dalam ruang pada proyek ruang interior sehingga pengguna ruang dapat beraktivitas dengan sehat, nyaman dan lebih produktif. Parameter untuk mengukur kesehatan dan kenyamanan suatu bangunan adalah adanya kebijakan anti-merokok, pemantauan kualitas udara, kenyamanan termal, visual, dan akustik, pembasmian hama, kebersihan gedung, dan survei kepuasan pengguna."
    >
      <Lantai1 />
      <Lantai2 />
      <Carousel slides={slides}>Upaya lain yang dilakukan</Carousel>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "22vh 22vh",
          gap: "5vh",
          justifyContent: "start",
        }}
      >
        {render}
      </div>
      <Keterangan />
      <Copyright />
    </GridContent>
  </>
)
