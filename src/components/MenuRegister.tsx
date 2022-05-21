import styled from 'styled-components'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { BsBank2 } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'

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

const Container = styled.div`
  width: 100%;
  min-height: 100px;

  background-color: #F4F9F5;

  border-radius: 25px;

  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.06);

  display: flex;
  justify-content: space-around;
  align-items: center;
`
const ButtonOption = styled.div`
  width: 150px;
  height: 80px;

  padding: 5px;

  border-radius: 10px;

  ${(props: createSelected) => 
    (props.selected === props.buttonName)? 
    `background-color: #10102D;
     color: #6AEAF5;
     pointer-events: none;
    `
    :`background-color: #F4F9F5;
      color: #10102D;`
  }
  font-size: 15px;
  font-weight: 500;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    cursor: pointer;
    ${(props: createSelected) => (props.selected === props.buttonName)?
       '': 
       'border-bottom: 8px solid #6AEAF5'
    }
    ;
  }
`

interface createSelected {
  selected: string;
  buttonName: string;
}
