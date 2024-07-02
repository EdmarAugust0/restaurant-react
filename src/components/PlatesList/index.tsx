import { useEffect, useState } from 'react'
import { RestaurantModel } from '../../Pages/Home'
import banner1 from '../../assets/image/banner1.svg'

import Plate from '../Plate'
import {
  BannerFundo,
  Container,
  InfosRestaurant,
  List,
  Title,
  TypeFood
} from './styles'

type Props = {
  plates: RestaurantModel[]
}

const PlatesList = ({ plates }: Props) => {
  const [plate, setPlate] = useState<RestaurantModel>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/ID')
      .then((res) => res.json())
      .then((res) => setPlate(res))
  }, [])

  return (
    <Container>
      <BannerFundo style={{ backgroundImage: `url(${banner1})` }}>
        <InfosRestaurant className="container">
          <TypeFood>{plate?.tipo}</TypeFood>
          <Title>{plate?.title}</Title>
        </InfosRestaurant>
      </BannerFundo>
      <div className="container">
        <List>
          {plates.map((plate) => (
            <Plate
              key={plate.id}
              image={plate.cardapio.foto}
              title={plate.cardapio.nome}
              description={plate.cardapio.descricao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default PlatesList
