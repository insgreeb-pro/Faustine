import Head from 'next/head'

export const Container = ({ children, title }) => {
  return (
    <div
      style={{
        width: '50%',
        margin: '10px 70px',
        borderWidth: '1px',
        border: 'solid 1px #eee',
        padding: '20px',
        borderRadius: '5px'
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  )
}
