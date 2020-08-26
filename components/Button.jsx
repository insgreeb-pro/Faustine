import Link from "next/link"
import Button from "react-bootstrap/Button"

export default () => {
  return (
    <Link href={`/TataLahanTepatGuna`}>
      <Button
        variant="secondary"
        style={{
          alignSelf: "center",
          width: "15%",
          fontSize: "1.2em",
          cursor: "pointer",
        }}
        block
      >
        BEMS
      </Button>
    </Link>
  )
}
