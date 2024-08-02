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
              to={`/cardapio/${restaurant.id}`}
              restaurant={restaurant}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
