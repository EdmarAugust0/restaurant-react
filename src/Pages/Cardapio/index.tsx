import { useParams } from 'react-router-dom'

import { useGetPlateQuery } from '../../services/api'

import Header2 from '../../components/Header2'
import PlatesList from '../../components/PlatesList'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}

const Cardapio = () => {
  const { id } = useParams() as RestaurantParams
  const { data: getPlate } = useGetPlateQuery(id)

  if (getPlate) {
    return (
      <>
        <Header2 />
        <PlatesList restaurant={getPlate} />
      </>
    )
  }
  return <Loader />
}

export default Cardapio
