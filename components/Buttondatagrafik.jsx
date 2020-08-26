import Link from "next/link"
import Button from "react-bootstrap/Button"
import { FaArrowRight } from "react-icons/fa"

export default () => {
  return (
    <Link href={`/TataLahanTepatGuna`}>
      <Button
        variant="secondary"
        style={{ gridArea: "button", alignSelf: "start", cursor: "pointer" }}
        block
      >
        Pusat data grafik <FaArrowRight />
      </Button>
    </Link>
  )
}
