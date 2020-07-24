export default ({ children, title }) => {
  return (
    <div className="content">
      <div className="title">{title}</div>
      <div className="grid-container">{children}</div>
    </div>
  )
}
