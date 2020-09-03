import { Container } from "../components/Container"
import InfoTooltip from "../components/InfoTooltip"
import { IconContext } from "react-icons"

export default ({ title, value, thld, minV, maxV, unit, info, children }) => {
  const background = thld ? (value < thld ? "#EF476F" : "#1EF9A5") : null

  return `${children}` == "undefined" ? (
    //biasa
    <Container bg={background}>
      <div className="numberCaption">{title}</div>
      <div className="numberValue">
        {value}
        <span className="numberValueUnit">{unit}</span>
      </div>
      <InfoTooltip title={{ title }} info={{ info }} bg={background} />
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
          {children}
        </IconContext.Provider>
      </div>
      <InfoTooltip title={{ title }} info={{ info }} bg={background} />
    </Container>
  )
}
