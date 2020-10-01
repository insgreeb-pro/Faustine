import Head from "next/head"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Carousel from "../components/Carousel"

const title = "Pengelolaan Bangunan Tingkat Lanjut"
const slides = [
  {
    source: "pengelolaanbangunan1.jpg",
    judul: "Peningkatan Kualitas Bangunan",
    isi:
      "Synergestic actionables i need to pee and then go to another meeting per my previous email but sorry i was triple muted. Gain traction strategic high-level 30,000 ft view looks great",
  },
  {
    source: "pengelolaanbangunan2.jpg",
    judul: "Inovasi dalam Manajemen",
    isi:
      "Turd polishing. But what's the real problem we're trying to solve here?",
  },
  {
    source: "pengelolaanbangunan3.jpg",
    judul: "Dampak Sosial Positif",
    isi:
      "Drive awareness to increase engagement put it on the parking lot synergize productive mindfulness drop-dead date, nor poop, yet optimize for search",
  },
  {
    source: "pengelolaanbangunan4.jpg",
    judul: "Design Intent & Owner's Project Requirement",
    isi:
      "Out of the loop can we parallel path get all your ducks in a row time to open the kimono.",
  },
  {
    source: "pengelolaanbangunan5.jpg",
    judul: "Dokumen As Built Drawing",
    isi:
      "Out of the loop can we parallel path get all your ducks in a row time to open the kimono.",
  },
  {
    source: "pengelolaanbangunan6.jpg",
    judul: "Verifikasi dan Bukti Dokumentasi",
    isi:
      "Out of the loop can we parallel path get all your ducks in a row time to open the kimono.",
  },
]

const slides2 = [
  {
    source: "pengelolaanbangunan7.jpg",
    judul: "Personel Terakreditasi",
    isi:
      "Do less with more thanks for taking the time to make the website, but i already made it in wix",
  },
  {
    source: "pengelolaanbangunan8.jpg",
    judul: "Struktur yang Terintegrasi",
    isi:
      "Can you make the blue bluer? we are a startup, and I really think this could go viral",
  },
  {
    source: "pengelolaanbangunan9.jpg",
    judul: "Program Pelatihan dalam Pengoperasian dan Pemeliharaan",
    isi:
      "We need to make the new version clean and sexy needs to be sleeke, and can you turn it around in photoshop so we can see more of the front, and mmm, exactly like that",
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
    <GridContent title={title} kelas="pengelolaanbangunantingkatlanjut">
      <Carousel slides={slides}>Upaya lain yang dilakukan</Carousel>
      <Carousel slides={slides2} area="carousel2">
        Upaya dalam bidang manajemen
      </Carousel>
    </GridContent>
  </>
)
