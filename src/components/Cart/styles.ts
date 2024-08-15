import styled from 'styled-components'

import { colors } from '../../styles'
import { ButtonModal } from '../Button/styles'

import trash from '../../assets/image/trash.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.isOpen {
    display: flex;
  }
`

export const SideBar = styled.div`
  background-color: ${colors.orange};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
  z-index: 1;

  ${ButtonModal} {
    font-size: 14px;
    padding: 8px 0;
  }
`
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  margin-top: 32px;

  p {
    color: ${colors.beige};
    font-size: 16px;
  }
`

export const CartItem = styled.li`
  display: flex;
  margin-bottom: 16px;
  background-color: ${colors.beige};
  padding: 8px;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
