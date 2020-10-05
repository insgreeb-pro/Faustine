import Circular from "./Circular"
import Number from "./Number"
import Pie from "./Pie"

export default ({ tipe, props }) => {
  return tipe == "Circular" ? (
    <Circular {...props} />
  ) : tipe == "Number" ? (
    <Number {...props} />
  ) : (
    <Pie {...props} />
  )
}
