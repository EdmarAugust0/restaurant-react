import styled from 'styled-components'

import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.orange};
`
export const Container = styled.div`
  padding: 8px;

  img {
    width: 304px;
  }
`

export const TitlePlate = styled.h6`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.begeClaro};
  margin: 8px 0px;
`

export const DescriptionPlate = styled.p`
  color: ${colors.begeClaro};
  font-size: 14px;
  margin-bottom: 8px;
`
