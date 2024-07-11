import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    height: 280px;
    width: 280px;
    margin-right: 24px;
    object-fit: cover;
  }

  > div {
    padding: 32px;
    display: flex;
  }

  .container {
    width: 1024px;
    height: 344px;
    background-color: ${colors.orange};
  }
`
export const Porcao = styled.p`
  color: ${colors.begeClaro};
  font-size: 14px;
  margin-bottom: 16px;
`
export const DivButton = styled.button`
  display: inline-block;
`

export const TitleModal = styled.h6`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.begeClaro};
  margin: 16px 0px;
`
export const DescriptionModal = styled.p`
  color: ${colors.begeClaro};
  font-size: 14px;
  margin-bottom: 16px;
`
