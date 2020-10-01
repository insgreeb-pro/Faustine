import Link from "next/link"
import Button from "react-bootstrap/Button"

export default () => {
  return (
    <Link href={`/TataLahanTepatGuna`}>
      <Button
        variant="danger"
        style={{
          width: "35%",
          fontSize: "1.2em",
          cursor: "pointer",
          borderRadius: "30px",
          backgroundColor: "#EF476F",
          color: "F3EFF5",
        }}
        block
      >
        BEMS DTNTF UGM
      </Button>
    </Link>
  )
}
