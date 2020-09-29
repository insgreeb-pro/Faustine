import { useState } from "react"
import Modal from "react-bootstrap/Modal"

import Selector from "../data/Selector"
import Button from "react-bootstrap/Button"

export default ({ lokasi, left, top, data }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const render = data
    ? data.map(({ tipe, props }) => (
        <Selector key={props} tipe={tipe} props={props} />
      ))
    : null
  return (
    <>
      <Button
        className="pin"
        variant="primary"
        onClick={handleShow}
        style={{
          height: "2vh",
          width: "2vh",
          padding: "0",
          left: left,
          top: top,
          marginLeft: "-0.5vh",
          marginTop: "-0.5vh",
        }}
      />

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{lokasi}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{render}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
