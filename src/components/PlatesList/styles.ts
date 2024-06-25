import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerFundo = styled.div`
  height: 280px;
  font-size: 32px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0px 112px 0px;
`

export const Container = styled.div`
  background-color: ${colors.begeClaro};
`

export const InfosRestaurant = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0px 32px 0px;
`

export const TypeFood = styled.h3`
  font-weight: 100;
  color: ${colors.branco};
`

export const Title = styled.h3`
  font-weight: bold;
  color: ${colors.branco};
`
