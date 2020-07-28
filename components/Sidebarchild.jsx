import Link from "next/link"

export default ({ icon, label, page, aktif }) => {
  const kelas = `${aktif}` == `${label}` ? "menu active" : "menu"

  return (
    <Link href={`/${page}`}>
      <div className={kelas}>
        {/* content */}
        {/* CONTENT */}
        <img className="logo" src={`/icons/sidebar/${icon}`} />
        <span>{label}</span>
        {/* CONTENT */}
        {/* content */}
      </div>
    </Link>
  )
}
