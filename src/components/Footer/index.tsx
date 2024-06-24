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
            <a href="#">
              <img src={insta} alt="insta" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
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
