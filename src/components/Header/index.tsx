import logoImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransactionButton>Nota transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
