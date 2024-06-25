import { Link } from 'react-router-dom'

import { Header2Style, ImgFundo2 } from './styles'

import LogoHeader from '../../assets/image/logoHeader.svg'
import header2 from '../../assets/image/header2.svg'

const Header2 = () => (
  <ImgFundo2 style={{ backgroundImage: `url(${header2})` }}>
    <Header2Style>
      <Link to="/">Restaurantes</Link>
      <img src={LogoHeader} alt="logo" />
      <p>0 produto(s) no carrinho</p>
    </Header2Style>
  </ImgFundo2>
)

export default Header2
