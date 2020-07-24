import { Container } from "../components/Container"
import InfoTooltip from "../components/InfoTooltip"
import { IconContext } from "react-icons"

export default ({
  title,
  ukuran,
  value,
  minV,
  maxV,
  thld,
  unit,
  info,
  children,
}) => {
  const background = thld ? (value < thld ? "#F29393" : "#93F293") : null
  const ukuran1 = `${ukuran}`

  return { children } == null ? (
    <Container bg={background} ukuran={ukuran1}>
      <div className="numberCaption">{title}</div>
      <div className="numberValue">
        {value}
        <span className="numberValueUnit">{unit}</span>
      </div>
      <InfoTooltip title={{ title }} info={{ info }} bg={background} />
    </Container>
  ) : (
    <Container bg={background} ukuran={ukuran1}>
      <div className="numberCaption">{title}</div>
      <div className="numberValue">
        {value}
        <IconContext.Provider
          value={{
            color: "#232323",
            size: "60px",
            style: { verticalAlign: "bottom" },
          }}
        >
          {children}
        </IconContext.Provider>
      </div>
      <InfoTooltip title={{ title }} info={{ info }} bg={background} />
    </Container>
  )
}
