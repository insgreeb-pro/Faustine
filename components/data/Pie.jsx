import { CircularProgressbar } from "react-circular-progressbar"
import Container from "../Container"
import InfoTooltip from "../InfoTooltip"

export default ({ title, value, minV, maxV, thld, unit, info }) => {
  const background = value < thld ? "#EF476F" : "#1EF9A5"

  return (
    <Container bg={background}>
      <CircularProgressbar
        value={value}
        strokeWidth={50}
        text={`${value}%`}
        styles={{
          path: {
            stroke: "#111",
            strokeLinecap: "butt",
            mixBlendMode: "color-burn",
            transformOrigin: "center center",
          },
          trail: {
            stroke: "white",
            mixBlendMode: "soft-light",
            transformOrigin: "center center",
          },
          text: {
            fill: "#073b4c",
            fontSize: "18pt",
            fontWeight: "bold",
          },
          background: {
            fill: `${background}`,
          },
        }}
        className="circular"
      />
      <div className="circularCaption">{title}</div>
      <InfoTooltip title={title} info={info} bg={background} />
    </Container>
  )
}
