import Head from "next/head";
import { Container } from "../components/Container";
import { FuncComponent, ClasComponent } from "../components/typeOfComponent";
import { Cekproperti } from "../components/assignproperty";

export default () => {
  return (
    <div>
      <Head>
        <title>skripsi</title>
      </Head>
      <Container title="sedboi.png">
        <FuncComponent />
        <ClasComponent />
      </Container>
      <Container>
        <Cekproperti nama="Asep" gelar="pengamen">
          <h4>this my children</h4>
        </Cekproperti>
        <Cekproperti nama="Jajang" gelar="pengusaha" />
      </Container>
    </div>
  );
};
