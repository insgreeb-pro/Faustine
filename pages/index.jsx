import Head from "next/head"
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"
import Circular from "../components/Circular"

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
      <Circular value="10" minV="0" maxV="100" thld="50" unit="%">
        Persentase keran auto stop
      </Circular>
      <Circular value="52" minV="0" maxV="100" thld="50" unit="%">
        isi teks 02
      </Circular>
      <Circular value="47" minV="0" maxV="100" thld="50" unit="%">
        isi teks 03
      </Circular>
      <Circular value="48" minV="0" maxV="100" thld="50" unit="%">
        isi teks 04
      </Circular>
      <Circular value="49" minV="0" maxV="100" thld="50" unit="h">
        isi teks 05
      </Circular>
      <Circular value="50" minV="0" maxV="100" thld="50" unit="%">
        isi teks 06
      </Circular>
      <Circular value="51" minV="0" maxV="100" thld="50" unit="km">
        isi teks 07
      </Circular>
    </Content>
  </>
)
