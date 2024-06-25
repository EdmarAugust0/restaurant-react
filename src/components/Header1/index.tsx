import { HeaderStyle, ImgFundo, TitleHeader } from './styles'

import header from '../../assets/image/header.svg'
import logoHeader from '../../assets/image/logoHeader.svg'

const Header = () => (
  <HeaderStyle>
    <ImgFundo style={{ backgroundImage: `url(${header})` }}>
      <div className="container">
        <img src={logoHeader} alt="logo" />
        <TitleHeader>
          Viva experiências gastronômicas no conforto da sua casa
        </TitleHeader>
      </div>
    </ImgFundo>
  </HeaderStyle>
)

export default Header
