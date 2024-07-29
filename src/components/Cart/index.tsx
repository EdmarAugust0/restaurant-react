import Button from '../Button'
import { CartContainer, CartItem, Overlay, SideBar, Total } from './styles'

import plate from '../../assets/image/plate1.svg'

const Cart = () => (
  <CartContainer>
    <Overlay />
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

export default Cart
