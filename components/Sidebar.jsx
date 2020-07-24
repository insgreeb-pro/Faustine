export default (activePage) => {
  const menus = [
    {
      icon: "homepage.svg",
      label: "Home",
    },
    {
      icon: "Icon-02.svg",
      label: "Petir",
    },
    {
      icon: "Icon-03.svg",
      label: "Otak asss",
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
        <div key={`${icon}-${label}`} className="menu">
          {/* content */}
          <img className="logo" src={`/icons/${icon}`} />
          <span>{label}</span>
          {/* content */}
        </div>
      ))}
    </div>
  )
}
