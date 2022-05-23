/* eslint-disable @next/next/no-page-custom-font */
import Menu from '../components/Menu'
import HeadPage from '../components/HeadPage'
import { HomeContainer, MainSection, MenuSection, TitleSection } from '../styles/mainPageStyle'
import ListBankAccount from '../components/ListBankAccount'

export default function BankAccounts(){
  return(
    <>
      <HeadPage titlePage={'Contas bancárias'}/>
      <HomeContainer>
        <MenuSection>
          <Menu/>
        </MenuSection>
        <MainSection>
          <TitleSection>Contas bancárias</TitleSection>
          <ListBankAccount/>
        </MainSection>
      </HomeContainer>
    </>
  )
}