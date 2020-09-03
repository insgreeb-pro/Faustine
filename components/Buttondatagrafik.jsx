import Link from "next/link"
import Button from "react-bootstrap/Button"
import { FaArrowRight } from "react-icons/fa"

export default () => {
  return (
    <Link href={`/TataLahanTepatGuna`}>
      <Button
        variant="danger"
        style={{
          gridArea: "button",
          alignSelf: "start",
          cursor: "pointer",
          backgroundColor: "#EF476F",
        }}
        block
      >
        Pusat data grafik <FaArrowRight />
      </Button>
    </Link>
  )
}
