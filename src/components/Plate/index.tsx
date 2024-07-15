import { useState } from 'react'
import { Cardapio } from '../../Pages/Home'
import Button from '../Button'
import Modal from '../Modal'
import { Card, Container, DescriptionPlate, TitlePlate } from './styles'

export type Props = {
  image: string
  title: string
  description: string
  typeFood?: string
  titleContainer?: string
  cardapio: Cardapio
}

const Plate = ({ image, description, title, cardapio }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const getDescription = (descricao: string) => {
    if (descricao.length > 193) {
      return descricao.slice(0, 190) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <Container>
          <img src={image} alt={title} />
          <TitlePlate>{title}</TitlePlate>
          <DescriptionPlate>{getDescription(description)}</DescriptionPlate>
          <Button
            title="Veja o preço"
            type="button"
            onClick={() => setModalAberto(true)}
          >
            Mais detalhes
          </Button>
        </Container>
      </Card>
      <Modal
        preco={cardapio.preco}
        description={cardapio.descricao}
        image={cardapio.foto}
        title={cardapio.nome}
        porcao={cardapio.porcao}
        modalAberto={modalAberto}
        setModalAberto={setModalAberto}
      />
    </>
  )
}

export default Plate
