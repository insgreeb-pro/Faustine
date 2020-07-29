// import { div } from "../components/div"
import Carousel from "react-bootstrap/Carousel"

export default ({ slides }) => {
  return (
    <div style={{ gridArea: "carousel" }} className="neoCarousel">
      <Carousel
        fade
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {slides.map(({ source, judul, isi }) => (
          <Carousel.Item
            key={`${judul}`}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={`/img/${source}`} className="carousel-img" />
            <Carousel.Caption>
              <h1 className="carousel-title">{judul}</h1>
              <p>{isi}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
