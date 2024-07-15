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
  modalAberto: boolean
  setModalAberto: (aberto: boolean) => void
}

const Modal = ({
  preco,
  description,
  image,
  title,
  porcao,
  modalAberto,
  setModalAberto
}: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <ModalUniversal className={modalAberto === true ? 'visible' : ''}>
      <ModalContent>
        <div className="container">
          <div>
            <Close
              src={close}
              alt="sair"
              onClick={() => setModalAberto(false)}
            />
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
      <div className="overlay" onClick={() => setModalAberto(false)}></div>
    </ModalUniversal>
  )
}

export default Modal
