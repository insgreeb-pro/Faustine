import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"
import Button from "react-bootstrap/Button"

export default ({ title, info }) => {
  return (
    <>
      <OverlayTrigger
        placement="right"
        overlay={
          <Popover>
            <Popover.Title as="h3">{title.title}</Popover.Title>
            <Popover.Content>{info.info}</Popover.Content>
          </Popover>
        }
      >
        <img className="info" src={`/icons/informationIcon.svg`} />
      </OverlayTrigger>
    </>
  )
}
