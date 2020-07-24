import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"
import Button from "react-bootstrap/Button"

export default ({ title, info, bg }) => {
  const icon = bg == null ? "informationIconBlack.svg" : "informationIcon.svg"
  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={
          <Popover className="popover">
            <Popover.Title as="h3" className="popover-title">
              {title.title}
            </Popover.Title>
            <Popover.Content className="popover-content">
              {info.info}
            </Popover.Content>
          </Popover>
        }
      >
        <img className="info" src={`/icons/${icon}`} />
      </OverlayTrigger>
    </>
  )
}
