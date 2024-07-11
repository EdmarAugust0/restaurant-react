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
import { useParams } from 'react-router-dom'

type Props = {
  plates: RestaurantModel[]
}

const PlatesList = () => {
  const [plate, setPlate] = useState<RestaurantModel>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPlate(res))
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      <BannerFundo style={{ backgroundImage: `url(${plate?.capa})` }}>
        <InfosRestaurant className="container">
          <TypeFood>{plate?.tipo}</TypeFood>
          <Title>{plate?.titulo}</Title>
        </InfosRestaurant>
      </BannerFundo>
      <div className="container">
        <List>
          {plate?.cardapio.map((p) => (
            <Plate
              key={p.id}
              image={p.foto}
              title={p.nome}
              description={p.descricao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default PlatesList
