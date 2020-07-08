export const Container = ({ children, title }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, monospace",
        backgroundColor: "#EFEFFF",
        width: "50%",
        margin: "10px auto 0px",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  )
}
