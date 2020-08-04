import Link from "next/link"
import Head from "next/head"
import { FaBicycle } from "react-icons/fa"
import Sidebar from "../components/Sidebar"
import GridContent from "../components/GridContent"
import Circular from "../components/Circular"
import Number from "../components/Number"
import Carousel from "../components/Carousel"
import Map from "../components/Map"
import Keterangan from "../components/Keterangan"
import { Container } from "../components/Container"

const title = "Home"

export default () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    {/* Sidebar dengan halaman aktif (Tata Lahan Tepat Guna) */}
    <Sidebar activePage={title} />

    {/* Menyusun konten dalam suatu grid*/}
    <GridContent title={title}>
      <Container ukuran="1/1/span 1/span 1">BING BONG</Container>
      <Container ukuran="1/2/span 1/span 1">BING BONG</Container>
      <Container ukuran="1/3/span 1/span 1">BING BONG</Container>
      <Container ukuran="1/4/span 1/span 1">BING BONG</Container>
      <Container ukuran="1/5/span 1/span 1">BING BONG</Container>
      <Container ukuran="2/1/span 1/span 1">BING BONG</Container>
      <Container ukuran="2/2/span 1/span 1">BING BONG</Container>
      <Container ukuran="2/3/span 1/span 1">BING BONG</Container>
      <Container ukuran="2/4/span 1/span 1">BING BONG</Container>
      <Container ukuran="2/5/span 1/span 1">BING BONG</Container>
      <Container ukuran="3/1/span 1/span 1">BING BONG</Container>
      <Container ukuran="3/2/span 1/span 1">BING bingSIT</Container>
    </GridContent>
  </>
)
