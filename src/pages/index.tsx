/* eslint-disable @next/next/no-page-custom-font */
import Logo from '../components/Logo'
import HeadPage from '../components/HeadPage'
import SignInForm from '../components/SignInForm'
import { Container, LogoContainer, FormArea, FormContainer } from '../styles/authPageStyle'

export default function SignIn() {
  return (
    <>
      <HeadPage titlePage={'Sign In'}/>
      <Container>
        <LogoContainer>
          <Logo size={300}/>
          <p>Manager</p>
        </LogoContainer>
        <FormArea>
          <FormContainer>
            <SignInForm/>
          </FormContainer>
        </FormArea>
      </Container>
    </>
  )
}

