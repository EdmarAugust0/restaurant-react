import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import { CartContainer, CartItem, Overlay, SideBar, Total } from './styles'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Modal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const isClose = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={isClose} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Total>
          <p>Valor total:</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Total>
        <Button type="button" title="Clique para continuar com a compra">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
