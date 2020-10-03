import Container from "../Container"
import InfoTooltip from "../InfoTooltip"
import { IconContext } from "react-icons"

export default ({ title, value, thld, unit, info, icon }) => {
  const background = thld ? (value < thld ? "#EF476F" : "#1EF9A5") : null

  return `${icon}` == "undefined" ? (
    //biasa
    <Container bg={background}>
      <div className="numberCaption">{title}</div>
      <div className="numberValue">
        {value}
        <span className="numberValueUnit">{unit}</span>
      </div>
      <InfoTooltip title={title} info={info} bg={background} />
    </Container>
  ) : (
    //icon
    <Container bg={background}>
      <div className="numberCaption">{title}</div>
      <div className="numberValue">
        {value}
        <IconContext.Provider
          value={{
            color: "#073b4c",
            size: "0.7em",
            style: { verticalAlign: "inherit" },
          }}
        >
          {icon}
        </IconContext.Provider>
      </div>
      <InfoTooltip title={title} info={info} bg={background} />
    </Container>
  )
}
