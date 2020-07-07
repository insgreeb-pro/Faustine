import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  function Increase() {
    setCount((nilaiVariabelSebelumnya) => nilaiVariabelSebelumnya + 1)
  }

  function Decrease() {
    setCount((samaSepertiDiatas) => samaSepertiDiatas - 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={Increase}>increase</button>
      <button onClick={Decrease}>decrease</button>
    </div>
  )
}

export default Counter
