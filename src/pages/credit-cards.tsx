/* eslint-disable @next/next/no-page-custom-font */
import Menu from '../components/Menu'
import HeadPage from '../components/HeadPage'
import { HomeContainer, MainSection, MenuSection, TitleSection } from '../styles/mainPageStyle'
import ListBankAccount from '../components/ListBankAccount'
import ListCreditCard from '../components/listCreditCard'

export default function CreditCards(){
  return(
    <>
      <HeadPage titlePage={'Cartões de crédito'}/>
      <HomeContainer>
        <MenuSection>
          <Menu/>
        </MenuSection>
        <MainSection>
          <TitleSection>Contas bancárias</TitleSection>
          <ListCreditCard/>
        </MainSection>
      </HomeContainer>
    </>
  )
}