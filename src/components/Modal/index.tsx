import Button from '../Button'
import {
  Close,
  DescriptionModal,
  DivButton,
  Img,
  ModalContent,
  ModalUniversal,
  Porcao,
  TitleModal
} from './styles'
import close from '../../assets/image/close 1.svg'

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
    <ModalUniversal>
      <ModalContent>
        <div className="container">
          <div>
            <Close src={close} alt="sair" />
          </div>
          <div>
            <Img src={image} alt={title} />
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
      <div className="overlay"></div>
    </ModalUniversal>
  )
}

export default Modal
