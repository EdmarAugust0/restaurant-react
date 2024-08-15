import styled from 'styled-components'

import { colors } from '../../styles'

export const FooterGeral = styled.div`
  background-color: ${colors.beige};
`

export const FooterContent = styled.div`
  text-align: center;
  max-width: 480px;
  width: 100%;

  > img {
    margin: 40px 0px;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 80px;
`

export const Description = styled.p`
  font-size: 10px;
  padding-bottom: 40px;
`
