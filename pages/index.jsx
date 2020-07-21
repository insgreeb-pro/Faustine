import Head from "next/head"
import { Container } from "../components/Container"
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"

const one = {
  gridArea: "1/1/span 2/span 2",
}

export default () => (
  <>
    <Head>
      <title>skripsi</title>
    </Head>

    <Sidebar />

    <Content title="Pengelolaan Limbah dan Materi">
      <div style={one} className="item x1">
        xX1Xx
      </div>
      <div className="item x2">xX2Xx</div>
      <div className="item x3">xX3Xx</div>
      <div className="item x4">xX4Xx</div>
      <div className="item x5">xX5Xx</div>
      <div className="item x6">xX6Xx</div>
      <div className="item x7">xX7Xx</div>
      <div className="item x8">xX8Xx</div>
      <div className="item x9">xX9Xx</div>
      <div className="item x10">xX10Xx</div>
      <div className="item x11">xX11Xx</div>
      <div className="item x12">xX12Xx</div>
      <div className="item x13">xX13Xx</div>
      <div className="item x14">xX14Xx</div>
      <div className="item x15">xX15Xx</div>
    </Content>
  </>
)
