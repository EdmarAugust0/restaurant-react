import { useGetFeatureRestaurantQuery } from '../../services/api'

import Header1 from '../../components/Header1'
import RestaurantList from '../../components/RestaurantList'
import Loader from '../../components/Loader'

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
