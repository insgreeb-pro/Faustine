export default ({ children, title, kelas }) => {
  return (
    <div className="content">
      <div className="title">{title}</div>
      <div className={`grid-container ${kelas}`}>{children}</div>
    </div>
  )
}
