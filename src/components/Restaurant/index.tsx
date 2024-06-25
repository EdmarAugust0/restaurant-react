import { Card, Description, HeaderCard, Infos, Title } from './styles'

import Button from '../Button'
import Tag from '../Tag'

import estrela from '../../assets/image/estrela.svg'

export type Props = {
  image: string
  title: string
  avaliation: string
  description: string
  infos: string[]
  to: string
}

const Restaurant = ({
  avaliation,
  description,
  image,
  infos,
  to,
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
      <Button type="link" to={to} title="Veja o menu">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Restaurant
