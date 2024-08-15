import * as S from './styles'

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
      <S.ButtonModal type="button" title={title} onClick={onClick}>
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
