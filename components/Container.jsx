export default ({ bg, children, tipe }) => {
  const kelas = tipe == null ? "neo" : "neoInset"

  return (
    <div style={{ backgroundColor: `${bg}` }} className={kelas}>
      {children}
    </div>
  )
}
