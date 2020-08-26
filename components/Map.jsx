import { Container } from "../components/Container"
import {
  FaRegHospital,
  FaBook,
  FaParking,
  FaPray,
  FaUtensils,
  FaToilet,
  FaUniversity,
  FaBasketballBall,
  FaWrench,
} from "react-icons/fa"

export default ({ title }) => {
  const iconstyle = { height: "1.5em", width: "1.5em" }
  const mapstyle = { width: "60%", height: "85%" }

  return (
    <div style={{ padding: "2%", gridArea: "map" }} className="neo">
      {/* Judul */}
      <div className="mapTitle">{title}</div>
      {/* Peta */}
      <img src="/img/map.jpg" style={mapstyle}></img>
      {/* Legenda */}
      <Container tipe="inset">
        <span style={{ fontStyle: "italic" }}>Legenda:</span>
        <ul className="legend">
          <li>
            <FaRegHospital style={iconstyle} />: Rumah sakit
          </li>
          <li>
            <FaBook style={iconstyle} />: Perpustakaan
          </li>
          <li>
            <FaParking style={iconstyle} />: Kantung parkir
          </li>
          <li>
            <FaPray style={iconstyle} />: Mushola
          </li>
          <li>
            <FaUtensils style={iconstyle} />: Kantin
          </li>
          <li>
            <FaToilet style={iconstyle} />: Toilet
          </li>
          <li>
            <FaUniversity style={iconstyle} />: Gedung kampus
          </li>
          <li>
            <FaBasketballBall style={iconstyle} />: Lapangan olaharaga
          </li>
          <li>
            <FaWrench style={iconstyle} />: Bengkel
          </li>
        </ul>
      </Container>
    </div>
  )
}
