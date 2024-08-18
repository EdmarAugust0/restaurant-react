import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Button = ({ children, onClick, title, type, to, disabled }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonModal
        type="button"
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonModal>
    )
  }
  return (
    <S.ButtonUniversal type="link" title={title} to={to as string}>
      {children}
    </S.ButtonUniversal>
  )
}

export default Button
