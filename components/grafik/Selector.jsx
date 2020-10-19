import ToggleButton from "react-bootstrap/ToggleButton"
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"
import Container from "../Container"

export default ({ parent, options, active, title }) => {
  const titleProp = {
    style: {
      fontWeight: "700",
      fontSize: "1.3em",
      lineHeight: "1.2em",
      textAlign: "center",
      margin: "5% 0 5% 0",
    },
  }

  return (
    <div className="neo" style={{ gridArea: "ctrl", height: "auto" }}>
      <p {...titleProp}>{title}</p>

      <ToggleButtonGroup
        vertical
        name="radio"
        value={active}
        onChange={(x) => {
          parent(x)
        }}
      >
        {options.map((data, idx) => (
          <ToggleButton key={idx} type="radio" variant="primary" value={idx}>
            {data.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  )
}
