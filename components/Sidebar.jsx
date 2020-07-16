export const Sidebar = () => {
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
  ]

  return (
    <div className="sidebar">
      <ul>
        {menus.map(({ icon, label }) => (
          <li key={`${icon}-${label}`}>
            <img className="logo" src={`/icons/${icon}`} />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
