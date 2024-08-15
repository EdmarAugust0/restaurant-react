import { useDispatch } from 'react-redux'

import { Cardapio } from '../../Pages/Home'
import Button from '../Button'

import close from '../../assets/image/close 1.svg'

import { add, open } from '../../store/reducers/cart'
import { convertToBRL } from '../../utils'

import * as S from './styles'

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
    <S.ModalUniversal className={modalAberto === true ? 'visible' : ''}>
      <S.ModalContent>
        <div className="container">
          <div>
            <S.Close
              src={close}
              alt="sair"
              onClick={() => setModalAberto(false)}
            />
          </div>
          <div>
            <S.Img src={plate.foto} alt={plate.nome} />
          </div>
          <div>
            <S.TitleModal>{plate.nome}</S.TitleModal>
            <S.DescriptionModal>{plate.descricao}</S.DescriptionModal>
            <S.Porcao>{plate.porcao}</S.Porcao>
            <S.DivButton>
              <Button
                title="Clique para adicionar no carrinho"
                type="button"
                onClick={addToCart}
              >
                {`Adicionar no carrinho - ${convertToBRL(plate.preco)}`}
              </Button>
            </S.DivButton>
          </div>
        </div>
      </S.ModalContent>
      <div className="overlay" onClick={() => setModalAberto(false)}></div>
    </S.ModalUniversal>
  )
}

export default Modal
