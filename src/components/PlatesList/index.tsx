import Plate from '../Plate'

import * as S from './styles'

export type Props = {
  restaurant?: RestaurantModel
}

const PlatesList = ({ restaurant }: Props) => {
  return (
    <S.Container>
      <S.BannerFundo style={{ backgroundImage: `url(${restaurant?.capa})` }}>
        <S.InfosRestaurant className="container">
          <S.TypeFood>{restaurant?.tipo?.toUpperCase()}</S.TypeFood>
          <S.Title>{restaurant?.titulo}</S.Title>
        </S.InfosRestaurant>
      </S.BannerFundo>
      <div className="container">
        <S.List>
          {restaurant?.cardapio.map((r) => (
            <Plate
              key={r.id}
              image={r.foto}
              title={r.nome}
              description={r.descricao}
              cardapio={r}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default PlatesList
