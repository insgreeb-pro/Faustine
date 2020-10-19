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
        gridArea: "tampakatas",
        display: "flex",
        flexDirection: "column",
      }}
      className="neo"
    >
      {/* Judul */}
      <div className="mapTitle" style={{ height: "10%", overflow: "auto" }}>
        Departemen Teknik Nuklir dan Teknik Fisika tampak atas
      </div>
      {/* Peta */}
      <div style={mapstyle}>
        <img src="/img/tampakatas.jpg" style={{ width: "100%" }}></img>
      </div>
    </div>
  )
}
