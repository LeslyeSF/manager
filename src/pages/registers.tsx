/* eslint-disable @next/next/no-page-custom-font */
import Menu from '../components/Menu'
import HeadPage from '../components/HeadPage'
import { HomeContainer, MainSection, MenuSection, TitleSection } from '../styles/mainPageStyle'
import MenuRegister from '../components/MenuRegister'
import { useState } from 'react'
import CreditCardRegisterForm from '../components/CreditCardRegisterForm'
import BankAccountRegisterForm from '../components/BankAccountRegisterForm'
import TransactionRegisterForm from '../components/TransactionRegisterForm'

export default function Registers() {
  const [selected, setSelected] = useState('transaction')
  
  return (
    <>
      <HeadPage titlePage={'Cadastrar'}/>
      <HomeContainer>
        <MenuSection>
          <Menu/>
        </MenuSection>
        <MainSection>
          <MenuRegister selected={selected} setSelected={setSelected}/>
          <TitleSection>
            Cadastrar
            {(selected === 'card')?
            <span> Cartão de crédito</span>
            :(selected === 'bank')?
            <span> Conta bancária</span>
            :<span> Transação</span>
          }
          </TitleSection>
          {(selected === 'card')?
            <CreditCardRegisterForm/>
            :(selected === 'bank')?
            <BankAccountRegisterForm/>
            :<TransactionRegisterForm/>
          }
        </MainSection>
      </HomeContainer>
    </>
  )
}
