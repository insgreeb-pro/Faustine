import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const InitialProps = await Document.getInitialProps(ctx)
    return { ...InitialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <body
            style={{
              fontFamily: "Arial, monospace",
              backgroundColor: "#ECF0F3",
              backgroundColor: "#70C0FC",
              color: "#232323",
              margin: "0px",
              padding: "0px",
            }}
          >
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    )
  }
}

export default MyDocument
