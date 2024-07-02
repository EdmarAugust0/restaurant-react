import styled from 'styled-components'

import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  background-color: ${colors.branco};
  margin-bottom: 48px;
  border: 1px solid ${colors.orange};

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const Title = styled.h6`
  font-size: 18px;
  font-weight: bold;
`
export const Description = styled.p`
  font-size: 14px;
  padding: 0px 8px;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;

  div {
    display: flex;
    align-items: center;
  }

  span {
    margin-right: 8px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
