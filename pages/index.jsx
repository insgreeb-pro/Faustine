import Head from "next/head"
import { Container } from "../components/Container"
import { FuncComponent, ClasComponent } from "../components/typeOfComponent"
import Properti from "../components/property"
import { ClassState, FunctionState } from "../components/State"
import Counter from "../components/Counter"
import Sidebar from "../components/Sidebar"

export default () => (
  <div>
    <Head>
      <title>skripsi</title>
    </Head>

    <Sidebar />

    <Container>
      {/* <div>
        <img className="sample-rounded" src="/img/sample.jpg" />
      </div> */}
      <FuncComponent />
      <h6>NO</h6>
      <ClasComponent />
    </Container>

    <Container>
      <Properti />
    </Container>

    <Container>
      <ClassState />
    </Container>

    <Container>
      <FunctionState />
    </Container>

    <Container>
      <Counter />
    </Container>
  </div>
)
