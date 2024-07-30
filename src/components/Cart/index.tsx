import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import { CartContainer, CartItem, Overlay, SideBar, Total } from './styles'
import { RootReducer } from '../../store'

import plate from '../../assets/image/plate1.svg'

import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const isClose = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={isClose} />
      <SideBar>
        <ul>
          <CartItem>
            <img src={plate} alt="teste" />
            <div>
              <h3>Nome do prato</h3>
              <p>R$ 60,90</p>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={plate} alt="teste" />
            <div>
              <h3>Nome do prato</h3>
              <p>R$ 60,90</p>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Total>
          <p>Valor total:</p>
          <p>R$ 180,95</p>
        </Total>
        <Button type="button" title="Clique para continuar com a compra">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
