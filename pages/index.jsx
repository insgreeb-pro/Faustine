import { Container } from '../components/Container'
import { FuncComponent, ClasComponent } from '../components/typeOfComponent'

export default () => {
  return (
    <div>
      <FuncComponent />
      <ClasComponent />
      <Container title="sedboi.png">
        <h1>meong</h1>
        <div>minko</div>
      </Container>
    </div>
  )
}
