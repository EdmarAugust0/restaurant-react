import Button from '../Button'
import Tag from '../Tag'

import estrela from '../../assets/image/estrela.svg'

import * as S from './styles'

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
    <S.Card>
      <img src={restaurant.capa} alt={restaurant.titulo} />
      <S.Infos>
        {restaurant.destacado ? <Tag>Destaque da semana</Tag> : ''}
        {/* as funções abaixo são para deixar a primeira letra em maiúscula */}
        <Tag>
          {restaurant.tipo[0].toUpperCase() + restaurant.tipo.substr(1)}
        </Tag>
      </S.Infos>
      <S.HeaderCard>
        <S.Title>{restaurant.titulo}</S.Title>
        <div>
          <span>{restaurant.avaliacao}</span>
          <img src={estrela} alt="estrela" />
        </div>
      </S.HeaderCard>
      <S.Description>{getDescricao(restaurant.descricao)}</S.Description>
      <div>
        <Button
          type="link"
          to={to}
          title={`Clique para ver o cardápio do ${restaurant.titulo}`}
        >
          Saiba mais
        </Button>
      </div>
    </S.Card>
  )
}

export default Restaurant
