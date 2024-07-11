import { useEffect, useState } from 'react'
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
import { useParams } from 'react-router-dom'
import Modal from '../Modal'

const PlatesList = () => {
  const [plate, setPlate] = useState<RestaurantModel>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPlate(res))
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
      <Modal
        preco={65.99}
        description={plate?.descricao}
        image={plate?.capa}
        title={plate?.titulo}
        porcao="Serve: de 2 a 3 pessoas"
      />
    </Container>
  )
}

export default PlatesList
