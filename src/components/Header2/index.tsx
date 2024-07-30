import { Link } from 'react-router-dom'

import { CartButton, Header2Style, ImgFundo2 } from './styles'

import LogoHeader from '../../assets/image/logoHeader.svg'
import header2 from '../../assets/image/header2.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header2 = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <ImgFundo2 style={{ backgroundImage: `url(${header2})` }}>
      <Header2Style className="container">
        <Link to="/">Restaurantes</Link>
        <img src={LogoHeader} alt="logo" />
        <CartButton onClick={openCart}>0 produto(s) no carrinho</CartButton>
      </Header2Style>
    </ImgFundo2>
  )
}

export default Header2
