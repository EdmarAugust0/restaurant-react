import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  CartButton,
  Hamburguer,
  HeaderRow,
  ImgFundo2,
  NavMobile
} from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import LogoHeader from '../../assets/image/logoHeader.svg'
import header2 from '../../assets/image/header2.svg'
import { useState } from 'react'

const Header2 = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <ImgFundo2 style={{ backgroundImage: `url(${header2})` }}>
      <div>
        <HeaderRow className="container">
          <Link className="linkHome" to="/">
            Restaurantes
          </Link>
          <img src={LogoHeader} alt="logo" />
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </HeaderRow>
        <NavMobile className={isMenuOpen ? 'isOpen' : ''}>
          <Link className="linkHome" to="/">
            Restaurantes
          </Link>
          <CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </NavMobile>
      </div>
    </ImgFundo2>
  )
}

export default Header2
