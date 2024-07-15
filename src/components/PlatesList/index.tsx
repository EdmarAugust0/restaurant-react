import { useEffect } from 'react'
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
import Modal from '../Modal'

export type Props = {
  restaurant?: RestaurantModel
}

const PlatesList = ({ restaurant }: Props) => {
  useEffect(() => console.log(restaurant), [])
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
            <>
              <Plate
                key={r.id}
                image={r.foto}
                title={r.nome}
                description={r.descricao}
              />
              <Modal
                preco={r.preco}
                description={r.descricao}
                image={r.foto}
                title={r.nome}
                porcao={r.porcao}
              />
            </>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default PlatesList
