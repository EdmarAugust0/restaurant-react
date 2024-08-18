import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import Address from '../FormAddress'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { convertToBRL } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [toDeliveryAddress, setToDeliveryAddress] = useState(false)

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

  if (toDeliveryAddress) {
    return (
      <S.CartContainer className={isOpen ? 'isOpen' : ''}>
        <S.Overlay onClick={isClose} />
        <S.SideBar>
          <Address setToDeliveryAddress={setToDeliveryAddress} />
        </S.SideBar>
      </S.CartContainer>
    )
  }
  if (!toDeliveryAddress) {
    return (
      <S.CartContainer className={isOpen ? 'isOpen' : ''}>
        <S.Overlay onClick={isClose} />
        <S.SideBar>
          {items.length > 0 ? (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>{convertToBRL(item.preco)}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(item.id)} />
                  </S.CartItem>
                ))}
              </ul>
              <S.Total>
                <p>Valor total:</p>
                <p>{convertToBRL(getTotalPrice())}</p>
              </S.Total>
              <Button
                type="button"
                title="Clique para continuar com a compra"
                onClick={() => setToDeliveryAddress(true)}
              >
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <S.VoidCart>
              <h4>Carrinho vazio!</h4>
              <p className="margin-top">
                Favor adicionar algum prato ao carrinho para continuarmos com a
                compra.
              </p>
            </S.VoidCart>
          )}
        </S.SideBar>
      </S.CartContainer>
    )
  } else {
    return <h1>error</h1>
  }
}
export default Cart
