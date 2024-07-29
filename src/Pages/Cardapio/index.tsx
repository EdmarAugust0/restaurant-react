import { useEffect, useState } from 'react'
import Header2 from '../../components/Header2'
import PlatesList from '../../components/PlatesList'
import { RestaurantModel } from '../Home'
import { useParams } from 'react-router-dom'
import { useGetPlateQuery } from '../../services/api'

const Cardapio = () => {
  const { id } = useParams()
  const { data: getPlate } = useGetPlateQuery(id!)

  return (
    <>
      <Header2 />
      <PlatesList restaurant={getPlate} />
    </>
  )
}

export default Cardapio
