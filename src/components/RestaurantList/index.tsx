import { RestaurantModel } from '../../Pages/Home'

import Restaurant from '../Restaurant'

import * as S from './styles'

export type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              to={`/cardapio/${restaurant.id}`}
              restaurant={restaurant}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default RestaurantList
