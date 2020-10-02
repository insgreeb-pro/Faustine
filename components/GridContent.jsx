import { useState } from "react"
import Accordion from "react-bootstrap/Accordion"
import { useAccordionToggle } from "react-bootstrap/AccordionToggle"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { FaArrowCircleUp } from "react-icons/fa"

const isi = {
  style: {
    backgroundColor: "#1EF9A5",
    borderRadius: "40px",
    marginBottom: "2%",
    padding: "2%",
    fontSize: "1.1em",
    fontWeight: "500",
    lineHeight: "1.4em",
    boxShadow:
      "5px 5px 15px rgba(92, 99, 105, 0.2) inset, -7px -7px 10px white inset",
  },
}

function CustomToggle({ eventKey }) {
  const [Content, setContent] = useState(true)

  const tog = useAccordionToggle(eventKey, () => setContent(!Content))
  const render = Content ? "Hide" : "Show"

  return (
    <Button
      variant="outline-primary"
      style={{ marginLeft: "1vw" }}
      onClick={tog}
    >
      {render}
    </Button>
  )
}

function Title({ title, caption }) {
  return (
    <Accordion defaultActiveKey="0">
      <>
        <div className="title">
          {title}
          <CustomToggle eventKey="0" />
        </div>
        <Accordion.Collapse eventKey="0">
          <p {...isi}>{caption}</p>
        </Accordion.Collapse>
      </>
    </Accordion>
  )
}

export default ({ children, title, kelas, caption }) => {
  return (
    <div className="content">
      <Title title={title} caption={caption} />
      <div className={`grid-container ${kelas}`}>{children}</div>
    </div>
  )
}
