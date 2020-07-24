export default () => {
  const containerStyles = [
    { bg: "#93F293", ket: "Baik" },
    { bg: "#F29393", ket: "Buruk" },
  ]

  return (
    <div
      style={{
        height: "100%",
        width: "50%",
        justifySelf: "end",
        fontSize: "23px",
      }}
    >
      <div style={{ fontWeight: "bold" }}>Keterangan</div>
      {containerStyles.map(({ bg, ket }) => (
        <div key={`${bg}`} style={{ display: "flex", alignItems: "center" }}>
          <div className="neoSmall" style={{ backgroundColor: `${bg}` }}></div>
          <span>{ket}</span>
        </div>
      ))}
    </div>
  )
}
