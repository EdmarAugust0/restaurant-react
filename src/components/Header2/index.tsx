import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { CartButton, Header2Style, ImgFundo2 } from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import LogoHeader from '../../assets/image/logoHeader.svg'
import header2 from '../../assets/image/header2.svg'

const Header2 = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <ImgFundo2 style={{ backgroundImage: `url(${header2})` }}>
      <Header2Style className="container">
        <Link to="/">Restaurantes</Link>
        <img src={LogoHeader} alt="logo" />
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </Header2Style>
    </ImgFundo2>
  )
}

export default Header2
