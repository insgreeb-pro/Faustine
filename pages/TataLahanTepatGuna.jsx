import Head from "next/head"
import { FaBicycle } from "react-icons/fa"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Circular from "../components/Circular"
import Number from "../components/Number"
import Carousel from "../components/Carousel"
import Map from "../components/Map"
import Keterangan from "../components/Keterangan"

// Judul halaman web
const title = "Tata Lahan Tepat Guna"

// Isi slideshow
const slides = [
  {
    source: "tatalahan1.jpg",
    judul: "Komitmen Penanganan Racun",
    isi:
      "Productize quick-win for the horse is out of the barn yet target rich environment that's not on the roadmap.",
  },
  {
    source: "tatalahan2.jpg",
    judul: "Low Impact Development",
    isi:
      "Turd polishing. But what's the real problem we're trying to solve here?",
  },
  {
    source: "tatalahan3.jpg",
    judul: "Peningkatan Kualitas Hidup",
    isi:
      "Cross-pollination organic growth, or hit the ground running quantity accountable talk",
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
    <GridContent title={title} kelas="tatalahantepatguna">
      {/* Digunakan untuk membuat konten seperti dashboard speedometer*/}
      <Circular
        title="Rasio RTH" //Judul untuk konten
        value="59" //Nilai (Rasio RTH)
        minV="0" //Nilai minimal (Rasio RTH)
        maxV="100" //Nilai maksimal (Rasio RTH)
        thld="50" //Batas nilai (Rasio RTH) yang masih dianggap bagus. Kotak akan berwarna hijau apabila Nilai Rasio RTH berada diatas batas nilai, dan merah sebaliknya.
        unit="%" //Satuan nilai
        info="Ruang Terbuka Hijau atau disingkat RTH adalah suatu bentuk pemanfaatan lahan pada satu kawasan yang diperuntukkan untuk penghijauan tanaman." //Informasi lebih lanjut mengenai Rasio RTH
      />

      <Circular
        title="Rasio Green Roof"
        value="30"
        minV="0"
        maxV="100"
        thld="50"
        unit="%"
        info="Green roof merupakan atap dari sebuah gedung yang sebagian/seluruhnya ditutupi vegetasi"
      />

      {/* Digunakan untuk membuat konten yang memiliki nilai dan satuan tertentu */}
      <Number
        title="Albedo rata-rata" //Judul untuk konten
        value="0.5" //Nilai (Albedo rata-rata)
        thld="0.3" //Batas nilai (Albedo rata-rata) yang masih dianggap bagus. Kotak akan berwarna hijau apabila Nilai Rasio RTH berada diatas batas nilai, dan merah sebaliknya.
        info="Albedo merupakan sebuah besaran yang menggambarkan perbandingan antara sinar Matahari yang tiba di permukaan bumi dan yang dipantulkan kembali ke angkasa" //Informasi lebih lanjut mengenai Rasio RTH
      />

      <Number
        title="Jumlah kantong sepeda"
        value="20"
        info="Jumlah kantong sepeda yang tersedia di sekitar Gedung Departemen Teknik Nuklir dan Teknik Fisika"
      >
        {/*Digunakan untuk satuan yang menggunakan icon (Font Awesome Bicycle)*/}
        <FaBicycle />
      </Number>

      <Carousel slides={slides} />

      <Map title="Denah fasilitas umum di sekitar Departemen Teknik Nuklir dan Teknik Fisika Universitas Gadjah Mada" />

      <Keterangan />
    </GridContent>
  </>
)
