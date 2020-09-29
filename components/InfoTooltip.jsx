import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"
import Button from "react-bootstrap/Button"

export default ({ title, info, bg }) => {
  const icon = bg == null ? "informationIconBlack.svg" : "informationIcon.svg"
  return (
    <>
      <OverlayTrigger
        placement="right"
        overlay={
          // ISI TOOLTIP
          <Popover>
            <Popover.Title as="h3" className="popover-title">
              {title}
            </Popover.Title>
            <Popover.Content className="popover-content">
              {info}
            </Popover.Content>
          </Popover>
        }
      >
        {/* icon */}
        <img className="info" src={`/icons/${icon}`} />
      </OverlayTrigger>
    </>
  )
}
