export default () => {
  const containerStyles = [
    { bg: "#93F293", ket: "Baik" },
    { bg: "#F0F293", ket: "Cukup Baik" },
    { bg: "#F29393", ket: "Buruk" },
  ]

  return (
    <div
      style={{
        height: "100%",
        width: "50%",
        justifySelf: "end",
        fontSize: "1.3em",
        gridArea: "3/5/span 1/span 1",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "3%" }}>Keterangan</div>
      {containerStyles.map(({ bg, ket }) => (
        <div
          key={`${bg}`}
          style={{ display: "flex", alignItems: "center", height: "30%" }}
        >
          <div className="neoSmall" style={{ backgroundColor: `${bg}` }}></div>
          <span>{ket}</span>
        </div>
      ))}
    </div>
  )
}
