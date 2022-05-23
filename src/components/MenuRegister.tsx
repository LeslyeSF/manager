import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { BsBank2 } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'
import { Container, ButtonOption } from '../styles/menuRegisterStyle'

export default function MenuRegister({ selected, setSelected }){
  
  return(
    <Container>
      <ButtonOption 
      selected={selected} 
      buttonName={'transaction'} 
      onClick={() => setSelected('transaction')}>
        <BiTransfer/>
        <p>Transação</p>
      </ButtonOption>
      <ButtonOption 
      selected={selected} 
      buttonName={'bank'} 
      onClick={() => setSelected('bank')}>
        <BsBank2/>
        <p>Conta bancária</p>
      </ButtonOption>
      <ButtonOption 
      selected={selected} 
      buttonName={'card'} 
      onClick={() => setSelected('card')}>
        <BsFillCreditCard2BackFill/>
        <p>Cartão de crédito</p>
      </ButtonOption>
    </Container>
  )
}
