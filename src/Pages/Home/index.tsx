import { useGetFeatureRestaurantQuery } from '../../services/api'

import Header1 from '../../components/Header1'
import RestaurantList from '../../components/RestaurantList'
import Loader from '../../components/Loader'

export type RestaurantModel = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data: getFeatureRestaurant } = useGetFeatureRestaurantQuery()

  if (getFeatureRestaurant) {
    return (
      <>
        <Header1 />
        <RestaurantList restaurants={getFeatureRestaurant} />
      </>
    )
  }

  return <Loader />
}

export default Home
