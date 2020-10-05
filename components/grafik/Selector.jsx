import ToggleButton from "react-bootstrap/ToggleButton"
import { ToggleButtonGroup } from "react-bootstrap"

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
      <ToggleButtonGroup
        vertical
        name="radio"
        value={active}
        onChange={(e) => {
          parent(e)
        }}
      >
        {options.map((data, idx) => (
          <ToggleButton key={idx} type="radio" variant="secondary" value={idx}>
            {data.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Container>
  )
}
