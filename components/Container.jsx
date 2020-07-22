export const Container = ({ bg, children }) => {
  return (
    <div style={{ backgroundColor: `${bg}` }} className="neo">
      {children}
    </div>
  )
}
