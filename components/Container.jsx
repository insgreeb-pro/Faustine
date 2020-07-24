export const Container = ({ bg, children, ukuran, tipe }) => {
  const kelas = tipe == null ? "neo" : "neoInset"
  return (
    <div
      style={{ backgroundColor: `${bg}`, gridArea: `${ukuran}` }}
      className={kelas}
    >
      {children}
    </div>
  )
}
