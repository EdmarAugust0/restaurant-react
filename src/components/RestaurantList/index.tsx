import { Container, List } from './styles'

import Restaurant from '../Restaurant'
import RestaurantModel from '../../models/Restaurant'

type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map(
          ({ id, image, avaliation, description, infos, title, to }) => (
            <Restaurant
              key={id}
              image={image}
              infos={infos}
              title={title}
              avaliation={avaliation}
              description={description}
              to={to}
            />
          )
        )}
      </List>
    </div>
  </Container>
)

export default RestaurantList
