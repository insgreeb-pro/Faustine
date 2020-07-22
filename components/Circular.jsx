import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { Container } from "../components/Container"

export default ({ value, minV, maxV, unit, thld, children }) => {
  const background = value < thld ? "#F29393" : "#93F293"

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
      <div className="circularCaption">{children}</div>
    </Container>
  )
}
