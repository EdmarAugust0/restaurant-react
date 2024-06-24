import { Card, Description, HeaderCard, Title } from './styles'

import Button from '../Button'

import plate1 from '../../assets/image/plate1.svg'
import estrela from '../../assets/image/estrela.svg'

const Plate = () => (
  <Card>
    <img src={plate1} alt="Prato1" />
    <HeaderCard>
      <Title>Hioki Sushi</Title>
      <div>
        <span>4.9</span>
        <img src={estrela} alt="estrela" />
      </div>
    </HeaderCard>
    <Description>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </Description>
    <div>
      <Button type="link" to="/plates" title="Veja o menu">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Plate
