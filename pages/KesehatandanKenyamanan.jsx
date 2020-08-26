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
  {
    source: "kesehatankenyamanan3.jpg",
    judul: "Audit IAQ",
    isi:
      "There is too much white space can we try some other colours maybe doing some work for us 'pro bono' will really add to your portfolio i promise you might wanna give it another shot.",
  },
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
  {
    source: "kesehatankenyamanan7.jpg",
    judul: "Minimalisir Getaran",
    isi:
      "Submit your meaningless business jargon to be used on the site! thanks for taking the time to make the website,",
  },
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

export default () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Sidebar activePage={title} />

    <GridContent title={title} kelas="kesehatandankenyamanan">
      <Number
        title="Kadar CO2"
        value="703"
        unit="ppm"
        thld="100" //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
        info="Even dead cats bounce put a record on and see who dances, or I just wanted to give you a heads-up, core competencies, yet drink from the firehose, or baseline the procedure and samepage your department."
      />

      <Number
        title="Kadar debu"
        value="0.15"
        unit="mg/m3"
        thld="0.1" //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
        info="Run it up the flag pole we’re starting to formalize flexible opinions around our foundations."
      />

      <Number
        title="Suhu rata-rata"
        value="30"
        unit={`\u00b0C`}
        thld="25" // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
        info="Can you champion this marketing computer development html roi feedback team website technologically savvy for throughput this is not the hill i want to die on first-order optimal strategies pass the mayo, appeal to the client, sue the vice president ."
      />

      <Number
        title="Suhu rata-rata"
        value="62"
        unit="%"
        thld="25" // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
        info="Sorry i was triple muted manage expectations we're ahead of the curve on that one where do we stand on the latest client ask who's responsible for the ask for this request?."
      />

      <Number
        title="Sound Transmission Class"
        value="50"
        thld="25" // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
        info="Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back."
      />

      <Number
        title="Kadar VOC"
        value="0.3"
        thld="0.1" //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
        unit="ppm"
        info="Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent."
      />

      <Number
        title="Jumlah kuman"
        value="700"
        thld="100" //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
        unit="kol/m3"
        info="Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have."
      />

      <Circular
        title="Kepuasan pengguna gedung"
        value="4.5"
        minV="0"
        maxV="5"
        thld="3"
        unit=""
        info="Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom"
      />

      <Carousel slides={slides}>*Upaya lain yang dilakukan</Carousel>

      <Keterangan />
    </GridContent>
  </>
)
