import Link from "next/link"
import Button from "react-bootstrap/Button"
import { FaArrowRight } from "react-icons/fa"

export default () => {
  return (
    <Link href={`/index`}>
      <Button
        variant="secondary"
        style={{ gridArea: "3/3/span 1/ span 2", alignSelf: "start" }}
        block
      >
        Pusat data grafik <FaArrowRight />
      </Button>
    </Link>
  )
}
