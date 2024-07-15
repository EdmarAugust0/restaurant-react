import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalUniversal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);

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

export const Close = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px;
  cursor: pointer;
  z-index: 1;
`

export const Img = styled.img`
  height: 280px;
  width: 280px;
  margin-right: 24px;
  object-fit: cover;
`
