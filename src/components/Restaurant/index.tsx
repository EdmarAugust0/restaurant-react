import { Card, Description, HeaderCard, Infos, Title } from './styles'

import Button from '../Button'
import Tag from '../Tag'

import estrela from '../../assets/image/estrela.svg'
import { RestaurantModel } from '../../Pages/Home'

export type Props = {
  restaurant: RestaurantModel
  to: string
}

const Restaurant = ({ to, restaurant }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.slice(0, 187) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img src={restaurant.capa} alt={restaurant.titulo} />
      <Infos>
        {restaurant.destacado ? <Tag>Destaque da semana</Tag> : ''}
        {/* as funções abaixo são para deixar a primeira letra em maiúscula */}
        <Tag>
          {restaurant.tipo[0].toUpperCase() + restaurant.tipo.substr(1)}
        </Tag>
      </Infos>
      <HeaderCard>
        <Title>{restaurant.titulo}</Title>
        <div>
          <span>{restaurant.avaliacao}</span>
          <img src={estrela} alt="estrela" />
        </div>
      </HeaderCard>
      <Description>{getDescricao(restaurant.descricao)}</Description>
      <div>
        <Button type="link" to={to} title="Veja o menu">
          Saiba mais
        </Button>
      </div>
    </Card>
  )
}

export default Restaurant
