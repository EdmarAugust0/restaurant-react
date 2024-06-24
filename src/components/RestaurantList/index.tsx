import Restaurant from '../Restaurant'
import { Container, List } from './styles'

import restaurant1 from '../../assets/image/restaurant1.svg'

const RestaurantList = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurant
          avaliation="4.5"
          title="Hioki Sushi "
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Destaque da semana', 'Japonesa']}
          image={restaurant1}
        />
        <Restaurant
          avaliation="4.5"
          title="Hioki Sushi "
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Japonesa']}
          image={restaurant1}
        />
        <Restaurant
          avaliation="4.5"
          title="Hioki Sushi "
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Japonesa']}
          image={restaurant1}
        />
        <Restaurant
          avaliation="4.5"
          title="Hioki Sushi "
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Japonesa']}
          image={restaurant1}
        />
        <Restaurant
          avaliation="4.5"
          title="Hioki Sushi "
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Japonesa']}
          image={restaurant1}
        />
        <Restaurant
          avaliation="4.5"
          title="Hioki Sushi "
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Japonesa']}
          image={restaurant1}
        />
      </List>
    </div>
  </Container>
)

export default RestaurantList
