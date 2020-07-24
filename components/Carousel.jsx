// import { div } from "../components/div"
import Carousel from "react-bootstrap/Carousel"

export default ({ slides }) => {
  return (
    <div style={{ gridArea: "1/5/span 2/span 1" }} className="neoCarousel">
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
            <img
              src={`/img/${source}`}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "40px",
                objectFit: "cover",
              }}
            />
            <Carousel.Caption>
              <h1>{judul}</h1>
              <p>{isi}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
