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
  const iconstyle = { height: "25px", width: "25px" }

  return (
    <Container ukuran="2/1/span 2/span 4">
      <div className="mapTitle">{title}</div>
      <img src="/img/Image 1.jpg"></img>
      <Container tipe="inset">
        <span style={{ fontStyle: "italic", fontSize: "18px" }}>Legenda:</span>
        <ul>
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
    </Container>
  )
}
