import Header2 from '../../components/Header2'
import PlatesList from '../../components/PlatesList'

import PlateModel from '../../models/Plates'

import plate2 from '../../assets/image/plate2.jpg'

const lista: PlateModel[] = [
  {
    id: 1,
    image: plate2,
    title: 'TEMAKIS',
    description: 'Alga , arroz , creme cheese ou maionese e cebolinha'
  },
  {
    id: 2,
    image: plate2,
    title: 'TEMAKIS',
    description: 'Alga , arroz , creme cheese ou maionese e cebolinha'
  },
  {
    id: 3,
    image: plate2,
    title: 'TEMAKIS',
    description: 'Alga , arroz , creme cheese ou maionese e cebolinha'
  },
  {
    id: 4,
    image: plate2,
    title: 'TEMAKIS',
    description: 'Alga , arroz , creme cheese ou maionese e cebolinha'
  },
  {
    id: 5,
    image: plate2,
    title: 'TEMAKIS',
    description: 'Alga , arroz , creme cheese ou maionese e cebolinha'
  },
  {
    id: 6,
    image: plate2,
    title: 'TEMAKIS',
    description: 'Alga , arroz , creme cheese ou maionese e cebolinha'
  }
]

const HiokiSushi = () => (
  <>
    <Header2 />
    <PlatesList plates={lista} />
  </>
)

export default HiokiSushi
