import { useState } from 'react'
import { CounterButton } from '../components/Counter'

export default () => {
  const [count, setCount] = useState(0)

  // ini method
  const update = (k) => {
    const n = count
    setCount(n + k)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <CounterButton
        update={update} // method as props
      >
        {/* ini children */}
        <p>Some children</p>
      </CounterButton>
    </div>
  )
}
