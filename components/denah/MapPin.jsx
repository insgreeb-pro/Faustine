import { useState } from "react"
import Modal from "react-bootstrap/Modal"

import Button from "react-bootstrap/Button"

export default ({ lokasi, top, left, icon, pic }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const buttonProp = {
    className: "pin",
    variant: "primary",
    style: {
      height: "3vh",
      width: "3vh",
      padding: "0",
      left: left,
      top: top,
      marginLeft: "-0.5vh",
      marginTop: "-0.5vh",
    },
  }

  const imgProp = {
    style: { width: "100%" },
  }
  return (
    <>
      <Button {...buttonProp} onClick={handleShow}>
        {icon}
      </Button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{lokasi}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "block" }}>
          <img {...imgProp} src={`/img/peta/${lokasi}.jpg`} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
