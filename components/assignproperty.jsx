export const Cekproperti = ({ nama, gelar, children }) => {
  return (
    <div>
      {children}
      <p>
        {nama} sebagai {gelar}
      </p>
      {children}
    </div>
  );
};
