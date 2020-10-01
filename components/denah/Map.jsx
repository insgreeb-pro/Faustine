import { useState } from "react"
import Popover from "react-bootstrap/Popover"
import MapPin from "./MapPin"
import {
  FaRegHospital,
  FaBook,
  FaPrescriptionBottleAlt,
  FaPray,
  FaUtensils,
  FaBus,
  FaUniversity,
  FaBasketballBall,
  FaWrench,
} from "react-icons/fa"
import { AiFillPrinter } from "react-icons/ai"

const iconstyle = { height: "1.5em", width: "1.5em" }
const mapstyle = {
  // backgroundImage: "url('/img/map.png')",
  width: "100%",
  height: "90%",
  borderRadius: "2vh",
  backgroundSize: "cover",
  overflow: "hidden",
  position: "relative",
}

export default () => {
  const [Pop, setPop] = useState(true)
  const pin = [
    {
      lokasi: "Departemen Teknik Nuklir Teknik Fisika",
      top: "50%",
      left: "35%",
      icon: <FaUniversity />,
    },
    {
      lokasi: "Kantin Teknik",
      top: "30%",
      left: "29%",
      icon: <FaUtensils />,
    },
    {
      lokasi: "Mushola Teknik",
      top: "25%",
      left: "24%",
      icon: <FaPray />,
    },
    {
      lokasi: "Masjid Al Hayat",
      top: "25%",
      left: "24%",
      icon: <FaPray />,
    },
    {
      lokasi: "Perpustakaan Teknik",
      top: "46%",
      left: "32%",
      icon: <FaBook />,
    },
    {
      lokasi: "Fotokopi Booksland",
      top: "45%",
      left: "29%",
      icon: <AiFillPrinter />,
    },
    {
      lokasi: "Warung Spesial Sambal",
      top: "30%",
      left: "17%",
      icon: <FaUtensils />,
    },
    {
      lokasi: "Gadjah Mada Auto Service",
      top: "30%",
      left: "65%",
      icon: <FaWrench />,
    },
    {
      lokasi: "Lapangan Satu Bumi",
      top: "61%",
      left: "48%",
      icon: <FaBasketballBall />,
    },
    {
      lokasi: "RSUP Dr. Sardjito",
      top: "89%",
      left: "40%",
      icon: <FaRegHospital />,
    },
    {
      lokasi: "Apotik RSUP Dr. Sardjito",
      top: "79%",
      left: "43%",
      icon: <FaPrescriptionBottleAlt />,
    },
    {
      lokasi: "Halte TJ FK-UGM",
      top: "76%",
      left: "56%",
      icon: <FaBus />,
    },
    {
      lokasi: "TPB Teknik UGM 1",
      top: "15.8%",
      left: "64%",
      icon: <FaBus />,
    },
    {
      lokasi: "TPB Teknik UGM 2",
      top: "20%",
      left: "58%",
      icon: <FaBus />,
    },
    {
      lokasi: "TPB Fakultas Biologi UGM",
      top: "36%",
      left: "83%",
      icon: <FaBus />,
    },
  ]
  function change(newValue) {
    setPop(newValue)
  }
  const ptoc = Pop ? <Popover.Content>Click Me!</Popover.Content> : null

  const all_pin = pin.map(({ lokasi, left, top, icon }) => (
    <MapPin
      key={lokasi}
      lokasi={lokasi}
      left={left}
      top={top}
      icon={icon}
      ctop={change}
      ptoc={ptoc}
    />
  ))

  return (
    <div
      style={{
        padding: "2%",
        gridArea: "map",
        display: "flex",
        flexDirection: "column",
      }}
      className="neo"
    >
      {/* Judul */}
      <div className="mapTitle">
        Fasilitas umum di sekitar Departemen Teknik Nuklir dan Teknik Fisika
      </div>
      {/* Peta */}
      <div style={mapstyle}>
        <img src="/img/map.png" style={{ width: "100%", height: "100%" }}></img>
        {all_pin}
      </div>
    </div>
  )
}
