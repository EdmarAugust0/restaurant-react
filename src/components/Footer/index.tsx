import { Link } from 'react-router-dom'

import logoHeader from '../../assets/image/logoHeader.svg'
import insta from '../../assets/image/insta.svg'
import facebook from '../../assets/image/facebook.svg'
import twitter from '../../assets/image/twitter.svg'

import { Description, FooterContent, FooterGeral, Links } from './styles'

const Footer = () => {
  return (
    <FooterGeral>
      <FooterContent className="container">
        <img src={logoHeader} alt="" />
        <Links>
          <li>
            <Link to="#" title="Clique para acessar nosso instagram">
              <img src={insta} alt="insta" />
            </Link>
          </li>
          <li>
            <Link to="#" title="Clique para acessar nosso Facebook">
              <img src={facebook} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link to="#" title="Clique para acessar nosso Twitter">
              <img src={twitter} alt="twitter" />
            </Link>
          </li>
        </Links>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Description>
      </FooterContent>
    </FooterGeral>
  )
}

export default Footer
