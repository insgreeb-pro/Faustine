import Head from 'next/head'

export const Container = ({ children, title }) => {
  return (
    <div
      style={{
        backgroundColor: '#EFEFFF',
        width: '50%',
        margin: '10px auto 0px',
        borderWidth: '10px',
        border: 'solid 1px #EFEFEF',
        padding: '20px',
        borderRadius: '5px'
      }}
    >
      {children}
    </div>
  )
}
