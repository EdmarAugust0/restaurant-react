import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const FormAddress = styled.form`
  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${colors.bege};
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  margin-bottom: 8px;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.bege};
  }

  input {
    background-color: ${colors.bege};
    color: ${colors.black};
    border: 1px solid ${colors.bege};
    padding: 8px;
    margin-top: 8px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    font-weight: bold;
  }

  small {
    color: ${colors.bege};
  }
`

export const MiniInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 32px;
`
export const ButtonGroup = styled.div`
  margin-top: 24px;

  button {
    margin-bottom: 8px;
    font-weight: bold;
  }
`
