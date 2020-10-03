const mapstyle = {
  // backgroundImage: "url('/img/map.png')",
  width: "100%",
  height: "90%",
  borderRadius: "2vh",
  backgroundSize: "cover",
  overflow: "hidden",
  position: "relative",
}

export default () => {
  return (
    <div
      style={{
        padding: "2%",
        gridArea: "map",
        display: "flex",
        flexDirection: "column",
      }}
      className="neo"
    >
      {/* Judul */}
      <div className="mapTitle">
        Fasilitas umum di sekitar Departemen Teknik Nuklir dan Teknik Fisika
      </div>
      {/* Peta */}
      <div style={mapstyle}>
        <img src="/img/map.png" style={{ width: "100%", height: "100%" }}></img>
        {all_pin}
      </div>
    </div>
  )
}
