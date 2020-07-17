export default () => {
  const menus = [
    {
      icon: "Icon-01.svg",
      label: "Sepeda",
    },
    {
      icon: "Icon-02.svg",
      label: "Petir",
    },
    {
      icon: "Icon-03.svg",
      label: "Otak",
    },
    {
      icon: "Icon-04.svg",
      label: "Hati",
    },
    {
      icon: "Icon-05.svg",
      label: "Gedung",
    },
    {
      icon: "Icon-06.svg",
      label: "Air",
    },
    {
      icon: "Icon-07.svg",
      label: "Pengelolaan Bangunan Tingkat Lanjut",
    },
    {
      icon: "Icon-01.svg",
      label: "Jajajaja",
    },
  ]

  return (
    <div className="sidebar">
      {menus.map(({ icon, label }) => (
        <div key={`${icon}`} className="menu">
          <img className="logo" src={`/icons/${icon}`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}
