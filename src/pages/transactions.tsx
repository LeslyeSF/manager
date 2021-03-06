/* eslint-disable @next/next/no-page-custom-font */
import Menu from '../components/Menu'
import HeadPage from '../components/HeadPage'
import { HomeContainer, MainSection, MenuSection, TitleSection } from '../styles/mainPageStyle'
import ListTransactions from '../components/ListTransactions'

export default function Transactions(){
  return(
    <>
      <HeadPage titlePage={'Suas Transações'}/>
      <HomeContainer>
        <MenuSection>
          <Menu/>
        </MenuSection>
        <MainSection>
          <TitleSection>Transações</TitleSection>
          <ListTransactions/>
        </MainSection>
      </HomeContainer>
    </>
  )
}