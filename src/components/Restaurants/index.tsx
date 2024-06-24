import Plate from '../Plate'
import { Container, List } from './styles'

const Restaurants = () => (
  <Container>
    <div className="container">
      <List>
        <Plate />
        <Plate />
        <Plate />
        <Plate />
        <Plate />
        <Plate />
      </List>
    </div>
  </Container>
)

export default Restaurants
