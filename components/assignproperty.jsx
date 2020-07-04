export const Cekproperti = ({ nama, gelar, children }) => {
  return (
    <div>
      {children}
      <h1>
        {nama} sebagai {gelar}
      </h1>
      {children}
    </div>
  )
}
