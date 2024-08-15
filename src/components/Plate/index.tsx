import { useState } from 'react'

import { Cardapio } from '../../Pages/Home'
import Button from '../Button'
import Modal from '../Modal'

import * as S from './styles'

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
  const getDescription = (text: string) => {
    if (text.length > 193) {
      return text.slice(0, 190) + '...'
    }
    return text
  }

  return (
    <>
      <S.Card>
        <S.Container>
          <img src={image} alt={title} />
          <S.TitlePlate>{title}</S.TitlePlate>
          <S.DescriptionPlate>{getDescription(description)}</S.DescriptionPlate>
          <Button
            title={`Clique para ver os detalhes do prato ${title}`}
            type="button"
            onClick={() => setModalAberto(true)}
          >
            Mais detalhes
          </Button>
        </S.Container>
      </S.Card>
      <Modal
        plate={cardapio}
        modalAberto={modalAberto}
        setModalAberto={setModalAberto}
      />
    </>
  )
}

export default Plate
