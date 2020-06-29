export const Container = ({ children }) => {
  return (
    <div
      style={{
        marginTop: '10px',
        width: '80%',
        margin: 'auto',
        borderWidth: '1px',
        border: 'solid 1px #eee',
        padding: '20px',
        borderRadius: '5px'
      }}
    >
      {children}
    </div>
  )
}
