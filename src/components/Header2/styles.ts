import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ImgFundo2 = styled.div`
  width: 100%;
  height: 176px;
  font-weight: bold;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    p,
    .linkHome {
      display: none;
    }
  }
`

export const CartButton = styled.p`
  cursor: pointer;
`
export const Hamburguer = styled.div`
  width: 32px;
  span {
    height: 2px;
    width: 100%;
    display: block;
    background-color: ${colors.orange};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
  height: 100%;
`

export const NavMobile = styled.nav`
  display: none;
  position: absolute;
  top: 115px;

  &.isOpen {
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 341px;
    ${CartButton} ,
  .linkHome {
      color: ${colors.bege};
      background-color: ${colors.orange};
      display: block;
      padding: 16px;
    }
  }
`
