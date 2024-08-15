import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonModal } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const FormAddress = styled.form`
  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${colors.beige};
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  margin-bottom: 8px;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.beige};
  }

  input {
    background-color: ${colors.beige};
    color: ${colors.black};
    border: 1px solid ${colors.beige};
    padding: 8px;
    margin-top: 8px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    font-weight: bold;
  }

  small {
    color: ${colors.beige};
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
export const Feedback = styled.div`
  h1 {
    font-size: 16px;
  }

  h1,
  p {
    color: ${colors.beige};
  }

  ${ButtonModal} {
    margin-top: 16px;
  }
`
