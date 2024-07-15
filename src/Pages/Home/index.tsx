import { useEffect, useState } from 'react'

import Header1 from '../../components/Header1'
import RestaurantList from '../../components/RestaurantList'

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
  const [listaHome, setListaHome] = useState<RestaurantModel[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaHome(res))
  }, [])

  return (
    <>
      <Header1 />
      <RestaurantList restaurants={listaHome} />
    </>
  )
}

export default Home
