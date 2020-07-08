export const Container = ({ children, title }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, monospace",
        backgroundColor: "#ECF0F3",
        width: "50%",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "5px 10px 20px rgba(92,99,105,1), -5px -10px 20px #FFFFF",
        // boxShadow: "-5px -10px 20px #FFFFF",
      }}
    >
      {children}
    </div>
  )
}
