import { useState } from 'react'
import Button from '../Button'
import { Card, Container, DescriptionPlate, TitlePlate } from './styles'

export type Props = {
  image: string
  title: string
  description: string
  typeFood?: string
  titleContainer?: string
  setModalAberto: (aberto: boolean) => void
}

const Plate = ({ image, description, title, setModalAberto }: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.slice(0, 187) + '...'
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
    </>
  )
}

export default Plate
