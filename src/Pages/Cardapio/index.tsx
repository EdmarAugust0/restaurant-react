import { useEffect, useState } from 'react'
import Header2 from '../../components/Header2'
import PlatesList from '../../components/PlatesList'
import { RestaurantModel } from '../Home'
import { useParams } from 'react-router-dom'

const Cardapio = () => {
  const [listaCardapio, setListaCardapio] = useState<RestaurantModel>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setListaCardapio(res))
  }, [id])
  return (
    <>
      <Header2 />
      <PlatesList restaurant={listaCardapio} />
    </>
  )
}

export default Cardapio
