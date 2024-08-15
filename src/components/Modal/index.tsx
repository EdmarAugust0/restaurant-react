import { useDispatch } from 'react-redux'

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

import { add, open } from '../../store/reducers/cart'
import { Cardapio } from '../../Pages/Home'
import { formataPreco } from '../../utils'

type Props = {
  plate: Cardapio
  modalAberto: boolean
  setModalAberto: (aberto: boolean) => void
}

const Modal = ({ plate, modalAberto, setModalAberto }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(plate))
    dispatch(open())
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
            <Img src={plate.foto} alt={plate.nome} />
          </div>
          <div>
            <TitleModal>{plate.nome}</TitleModal>
            <DescriptionModal>{plate.descricao}</DescriptionModal>
            <Porcao>{plate.porcao}</Porcao>
            <DivButton>
              <Button
                title="Clique para adicionar no carrinho"
                type="button"
                onClick={addToCart}
              >
                {`Adicionar no carrinho - ${formataPreco(plate.preco)}`}
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
