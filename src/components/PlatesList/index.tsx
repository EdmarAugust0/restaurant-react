import banner1 from '../../assets/image/banner1.svg'

import PlateModel from '../../models/Plates'

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
  plates: PlateModel[]
}

const PlatesList = ({ plates }: Props) => (
  <Container>
    <BannerFundo style={{ backgroundImage: `url(${banner1})` }}>
      <InfosRestaurant className="container">
        <TypeFood>Italiana</TypeFood>
        <Title>La Dolce Vita Trattoria</Title>
      </InfosRestaurant>
    </BannerFundo>
    <div className="container">
      <List>
        {plates.map(({ id, description, image, title }) => (
          <Plate
            key={id}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default PlatesList
