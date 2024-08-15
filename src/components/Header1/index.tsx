import * as S from './styles'

import header from '../../assets/image/header.svg'
import logoHeader from '../../assets/image/logoHeader.svg'

const Header = () => (
  <S.HeaderStyle>
    <S.ImgFundo style={{ backgroundImage: `url(${header})` }}>
      <div className="container">
        <img src={logoHeader} alt="logo" />
        <S.TitleHeader>
          Viva experiências gastronômicas no conforto da sua casa
        </S.TitleHeader>
      </div>
    </S.ImgFundo>
  </S.HeaderStyle>
)

export default Header
