import { Card, Description, HeaderCard, Infos, Title } from './styles'

import Button from '../Button'

import estrela from '../../assets/image/estrela.svg'
import Tag from '../Tag'

export type Props = {
  image: string
  title: string
  avaliation: string
  description: string
  infos: string[]
}

const Restaurant = ({
  avaliation,
  description,
  image,
  infos,
  title
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <HeaderCard>
      <Title>{title}</Title>
      <div>
        <span>{avaliation}</span>
        <img src={estrela} alt="estrela" />
      </div>
    </HeaderCard>
    <Description>{description}</Description>
    <div>
      <Button type="link" to="/plates" title="Veja o menu">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Restaurant
