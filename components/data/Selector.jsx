import Circular from "./Circular"
import Number from "./Number"

export default ({ tipe, props }) => {
  return tipe == "Circular" ? <Circular {...props} /> : <Number {...props} />
}
