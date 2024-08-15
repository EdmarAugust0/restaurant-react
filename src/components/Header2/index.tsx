import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import LogoHeader from '../../assets/image/logoHeader.svg'
import header2 from '../../assets/image/header2.svg'

import * as S from './styles'

const Header2 = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.ImgFundo2 style={{ backgroundImage: `url(${header2})` }}>
      <div>
        <S.HeaderRow className="container">
          <Link
            className="linkHome"
            to="/"
            title="Clique para voltar a escolha de restaurantes"
          >
            Restaurantes
          </Link>
          <img src={LogoHeader} alt="logo" />
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <S.CartButton
            onClick={openCart}
            title="Clique para acessar o carrinho de compras"
          >
            {items.length} produto(s) no carrinho
          </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'isOpen' : ''}>
          <Link
            className="linkHome"
            to="/"
            title="Clique para voltar a escolha de restaurantes"
            onClick={() => setIsMenuOpen(false)}
          >
            Restaurantes
          </Link>
          <S.CartButton
            onClick={openCart}
            title="Clique para acessar o carrinho de compras"
          >
            {items.length} produto(s) no carrinho
          </S.CartButton>
        </S.NavMobile>
      </div>
    </S.ImgFundo2>
  )
}

export default Header2
