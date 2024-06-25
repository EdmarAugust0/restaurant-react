import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonGeral = styled(Link)`
  font-size: 14px;
  color: ${colors.begeClaro};
  background-color: ${colors.orange};
  padding: 4px 6px;
  margin-top: 100px;
  margin: 16px 0px 16px 8px;
  border: 1px solid ${colors.orange};
  transition: 1s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    filter: brightness(120%);
  }
`

export const ButtonModal = styled.button`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  transition: 1s;
  color: ${colors.orange};
  background-color: ${colors.bege};
  border: 1px solid ${colors.bege};
  width: 100%;

  &:hover {
    filter: brightness(120%);
  }
`
