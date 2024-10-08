import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.orange};
  height: 100%;
`
export const Container = styled.div`
  padding: 8px;

  img {
    display: block;
    width: 304px;
    height: 167px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }
`

export const TitlePlate = styled.h6`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.lightBeige};
  margin: 8px 0px;
`

export const DescriptionPlate = styled.p`
  color: ${colors.lightBeige};
  font-size: 14px;
  margin-bottom: 8px;
`
