import Head from "next/head"
import { Container } from "./components/Container"
import { FuncComponent, ClasComponent } from "./components/typeOfComponent"
import Properti from "./components/property"
import { ClassState, FunctionState } from "./components/State"
import Counter from "./components/Counter"

export default () => (
  <div>
    <Head>
      <title>skripsi</title>
    </Head>

    <Container>
      <FuncComponent />
      <h1>NO</h1>
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
