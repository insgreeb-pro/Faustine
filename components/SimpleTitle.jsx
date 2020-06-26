import Head from 'next/head'

export const SimpleTitle = ({ title, subtitle }) => (
  <div
    style={{
      textAlign: 'center'
    }}
  >
    <Head>
      <title>{title}</title>
    </Head>
    <h2>{title}</h2>
    <strong>{subtitle}</strong>
  </div>
)
