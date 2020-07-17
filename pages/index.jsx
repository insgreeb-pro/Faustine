import Head from "next/head"
import { Grid } from "@chakra-ui/core"
import { Container } from "../components/Container"
import Sidebar from "../components/Sidebar"

export default () => (
  <>
    <Head>
      <title>skripsi</title>
    </Head>

    <Sidebar />
    {/* <Grid>
      <Container>
        <p>pink ponk</p>
      </Container>
    </Grid> */}
  </>
)
