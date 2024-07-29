import { RestaurantModel } from '../../Pages/Home'

import Plate from '../Plate'
import {
  BannerFundo,
  Container,
  InfosRestaurant,
  List,
  Title,
  TypeFood
} from './styles'

export type Props = {
  restaurant?: RestaurantModel
}

const PlatesList = ({ restaurant }: Props) => {
  return (
    <Container>
      <BannerFundo style={{ backgroundImage: `url(${restaurant?.capa})` }}>
        <InfosRestaurant className="container">
          <TypeFood>{restaurant?.tipo}</TypeFood>
          <Title>{restaurant?.titulo}</Title>
        </InfosRestaurant>
      </BannerFundo>
      <div className="container">
        <List>
          {restaurant?.cardapio.map((r) => (
            <Plate
              key={r.id}
              image={r.foto}
              title={r.nome}
              description={r.descricao}
              cardapio={r}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default PlatesList
