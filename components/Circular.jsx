import { CircularProgressbar } from "react-circular-progressbar"
import { Container } from "../components/Container"
import InfoTooltip from "../components/InfoTooltip"

export default ({ title, ukuran, value, minV, maxV, thld, unit, info }) => {
  const background = value < thld ? "#F29393" : "#93F293"
  const ukuran1 = `${ukuran}`

  return (
    <Container bg={background} ukuran={ukuran1}>
      <CircularProgressbar
        value={value}
        minValue={minV}
        maxValue={maxV}
        text={`${value}${unit}`}
        strokeWidth={12}
        background={true}
        circleRatio={0.75}
        styles={{
          path: {
            stroke: "#575757",
            mixBlendMode: "color-burn",
            transform: "rotate(0.625turn)",
            transformOrigin: "center center",
          },
          trail: {
            stroke: "white",
            mixBlendMode: "soft-light",
            transform: "rotate(0.625turn)",
            transformOrigin: "center center",
          },
          text: {
            fill: "#232323",
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
      <InfoTooltip title={{ title }} info={{ info }} bg={background} />
    </Container>
  )
}
