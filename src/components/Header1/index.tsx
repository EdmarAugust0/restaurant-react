import * as S from './styles'

import header from '../../assets/image/header.svg'
import logoHeader from '../../assets/image/logoHeader.svg'

const Header = () => (
  <S.HeaderStyle>
    <S.ImgFundo style={{ backgroundImage: `url(${header})` }}>
      <div className="container">
        <h1 className="line-height">
          <img src={logoHeader} alt="logo" />
        </h1>
        <S.TitleHeader>
          Viva experiências gastronômicas no conforto da sua casa
        </S.TitleHeader>
      </div>
    </S.ImgFundo>
  </S.HeaderStyle>
)

export default Header
