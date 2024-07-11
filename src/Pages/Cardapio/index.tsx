import { useEffect, useState } from 'react'
import Header2 from '../../components/Header2'
import PlatesList from '../../components/PlatesList'
import { RestaurantModel } from '../Home'

const Cardapio = () => {
  const [listaCardapio, setListaCardapio] = useState<RestaurantModel[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaCardapio(res))
  }, [])
  return (
    <>
      <Header2 />
      <PlatesList />
    </>
  )
}

export default Cardapio
