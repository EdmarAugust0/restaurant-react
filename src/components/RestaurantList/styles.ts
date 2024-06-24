import styled from 'styled-components'

import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.begeClaro};
`

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  padding: 80px 0px 76px 0px;
`
