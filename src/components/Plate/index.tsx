import Button from '../Button'
import { Card, Container, DescriptionPlate, TitlePlate } from './styles'

export type Props = {
  image: string
  title: string
  description: string
  typeFood?: string
  titleContainer?: string
}

const Plate = ({ image, description, title }: Props) => (
  <Card>
    <Container>
      <img src={image} alt={title} />
      <TitlePlate>{title}</TitlePlate>
      <DescriptionPlate>{description}</DescriptionPlate>
      <Button title="Veja o preço" type="button">
        Mais detalhes
      </Button>
    </Container>
  </Card>
)

export default Plate
