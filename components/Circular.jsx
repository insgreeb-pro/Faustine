import { CircularProgressbar } from "react-circular-progressbar"
import { Container } from "../components/Container"
import InfoTooltip from "../components/InfoTooltip"

export default ({ title, value, minV, maxV, thld, unit, info }) => {
  const background = value < thld ? "#EF476F" : "#1EF9A5"

  return (
    <Container bg={background}>
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
            stroke: "#111",
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
      <InfoTooltip title={{ title }} info={{ info }} bg={background} />
    </Container>
  )
}
