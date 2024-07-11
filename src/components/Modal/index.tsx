import Button from '../Button'
import { DescriptionPlate } from '../Plate/styles'
import {
  DescriptionModal,
  DivButton,
  ModalContent,
  Porcao,
  TitleModal
} from './styles'

type Props = {
  preco: number
  image?: string
  title?: string
  description?: string
  porcao?: string
}

const Modal = ({ preco, description, image, title, porcao }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <ModalContent>
      <div className="container">
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <TitleModal>{title}</TitleModal>
          <DescriptionModal>{description}</DescriptionModal>
          <Porcao>{porcao}</Porcao>
          <DivButton>
            <Button title="Adicione no carrinho" type="button">
              {`Adicionar no carrinho - ${formataPreco(preco)}`}
            </Button>
          </DivButton>
        </div>
      </div>
    </ModalContent>
  )
}

export default Modal
