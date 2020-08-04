export default () => {
  const containerStyles = [
    { bg: "#93F293", ket: "Baik" },
    { bg: "#F0F293", ket: "Cukup Baik" },
    { bg: "#F29393", ket: "Buruk" },
  ]

  return (
    <div className="keterangan">
      <div
        style={{ fontWeight: "bold", fontSize: "1.2em", marginBottom: "3%" }}
      >
        Keterangan
      </div>
      {containerStyles.map(({ bg, ket }) => (
        <div
          key={`${bg}`}
          style={{ display: "flex", alignItems: "center", height: "30%" }}
        >
          <div className="neoSmall" style={{ backgroundColor: `${bg}` }}></div>
          <span style={{ fontSize: "1.1em" }}>{ket}</span>
        </div>
      ))}
    </div>
  )
}
