/* eslint-disable @next/next/no-page-custom-font */
import Menu from '../components/Menu'
import HeadPage from '../components/HeadPage'
import Logo from '../components/Logo'
import { HomeContainer, MainSection, MenuSection, LogoContainer } from '../styles/mainPageStyle'
import Dashboard from '../components/Dashboard'

export default function Home() {
  
  return (
    <>
      <HeadPage titlePage={'Home'}/>
      <HomeContainer>
        <MenuSection>
          <LogoContainer className='logoButton'>
            <Logo size={50}/>
            <p>Manager</p>
          </LogoContainer>
          <Menu/>
        </MenuSection>
        <MainSection>
          <Dashboard/>
        </MainSection>
      </HomeContainer>
    </>
  )
}
