/* eslint-disable @next/next/no-page-custom-font */
import Menu from '../components/Menu'
import HeadPage from '../components/HeadPage'
import { HomeContainer, MainSection } from '../styles/mainPageStyle'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <>
      <HeadPage titlePage={'Home'}/>
      <HomeContainer>
        <Menu/>
        <MainSection>
          <Dashboard/>
        </MainSection>
      </HomeContainer>
    </>
  )
}
