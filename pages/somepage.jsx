import Link from 'next/link'
import Head from 'next/head'

export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Head>
        <title>Some Page</title>
      </Head>
      <h2>Some Page</h2>
      <Link href="/">Goto Home</Link>
    </div>
  )
}
