import { Container, List } from './styles'

import Restaurant from '../Restaurant'
import { RestaurantModel } from '../../Pages/Home'

export type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              image={restaurant.capa}
              tipo={restaurant.tipo}
              title={restaurant.title}
              avaliation={restaurant.avaliacao}
              description={restaurant.descricao}
              to={`/cardapio/${restaurant.id}`}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
