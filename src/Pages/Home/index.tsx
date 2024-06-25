import Header1 from '../../components/Header1'
import RestaurantList from '../../components/RestaurantList'
import RestaurantModel from '../../models/Restaurant'

import restaurant1 from '../../assets/image/restaurant1.svg'
import restaurant2 from '../../assets/image/restaurant2.svg'

const lista: RestaurantModel[] = [
  {
    id: 1,
    image: restaurant1,
    title: 'Hioki Sushi',
    avaliation: '4.7',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    to: '/hioki-sushi'
  },
  {
    id: 2,
    image: restaurant2,
    title: 'La Dolce Vita Trattoria',
    avaliation: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    to: '/la-dolce-vita-trattoria'
  },
  {
    id: 3,
    image: restaurant1,
    title: 'Hioki Sushi',
    avaliation: '4.7',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    to: '/hioki-sushi'
  },
  {
    id: 4,
    image: restaurant2,
    title: 'La Dolce Vita Trattoria',
    avaliation: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    to: '/la-dolce-vita-trattoria'
  },
  {
    id: 5,
    image: restaurant1,
    title: 'Hioki Sushi',
    avaliation: '4.7',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    to: '/hioki-sushi'
  },
  {
    id: 6,
    image: restaurant2,
    title: 'La Dolce Vita Trattoria',
    avaliation: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    to: '/la-dolce-vita-trattoria'
  }
]

const Home = () => (
  <>
    <Header1 />
    <RestaurantList restaurants={lista} />
  </>
)

export default Home
