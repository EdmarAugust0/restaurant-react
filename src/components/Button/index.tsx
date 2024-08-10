import { ButtonGeral, ButtonModal } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ children, onClick, title, type, to }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonModal type="button" title={title} onClick={onClick}>
        {children}
      </ButtonModal>
    )
  }
  return (
    <ButtonGeral type="link" title={title} to={to as string}>
      {children}
    </ButtonGeral>
  )
}

export default Button
