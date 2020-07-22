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
      <Circular
        title="Persentase keran autostop"
        value="10"
        minV="0"
        maxV="100"
        thld="50"
        unit="%"
        info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae enim at
        autem, cupiditate ut in voluptatum possimus aspernatur molestiae dolor."
      />
      <Circular
        title="isi teks 02"
        value="52"
        minV="0"
        maxV="100"
        thld="50"
        unit="%"
        info="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />

      <Circular
        title="isi teks 02"
        value="47"
        minV="0"
        maxV="100"
        thld="50"
        unit="%"
        info="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <Circular
        title="isi teks 02"
        value="48"
        minV="0"
        maxV="100"
        thld="50"
        unit="%"
        info="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <Circular
        title="isi teks 02"
        value="49"
        minV="0"
        maxV="100"
        thld="50"
        unit="h"
        info="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <Circular
        title="isi teks 02"
        value="50"
        minV="0"
        maxV="100"
        thld="50"
        unit="%"
        info="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <Circular
        title="isi teks 02"
        value="51"
        minV="0"
        maxV="100"
        thld="50"
        unit="km"
        info="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
    </Content>
  </>
)
