export const CounterButton = ({ update, children }) => {
  const clickHandle = (k) => {
    // update is props as method
    if (typeof update === 'function') update(k)
  }

  return (
    <div>
      <div>
        {/* children use here */}
        <span>Children Render Here: </span>
        {children}
      </div>
      <button onClick={() => clickHandle(1)}>Plus</button>
      <button onClick={() => clickHandle(-1)}>Minus</button>
    </div>
  )
}
