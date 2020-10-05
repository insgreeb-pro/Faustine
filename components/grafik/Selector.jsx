import ToggleButton from "react-bootstrap/ToggleButton"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Container from "../Container"

export default ({ parent, options, active }) => {
  const title = {
    style: {
      fontWeight: "700",
      fontSize: "1em",
      lineHeight: "1.2em",
      textAlign: "center",
      margin: "5% 0 5% 0",
    },
  }

  // const radios = [
  //   { name: "Satu Gedung" },
  //   { name: "Lantai 1" },
  //   { name: "Lantai 2" },
  // ]

  return (
    <Container>
      <p {...title}>Indeks Konsumsi Energi</p>
      <ButtonGroup toggle vertical>
        {options.map((data, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={idx}
            checked={active === idx}
            onClick={() => {
              parent(idx)
            }}
          >
            {data.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </Container>
  )
}
