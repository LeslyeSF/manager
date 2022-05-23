/* eslint-disable @next/next/no-page-custom-font */
import Logo from '../components/Logo'
import HeadPage from '../components/HeadPage'
import SignUpForm from '../components/SignUpForm'
import { Container, LogoContainer, FormArea, FormContainer } from '../styles/authPageStyle'
import { useEffect } from 'react'
import { useAuth } from '../context/authContext'
import { useRouter } from 'next/router'

export default function SignUp() {
  const { token, updateToken, updateUser } = useAuth()
  const router = useRouter()

  useEffect(()=>{
    if(token === ''){
      if(localStorage.getItem('managerToken')) {
        updateToken(localStorage.getItem('managerToken'))
        updateUser({
          userId: localStorage.getItem('manager_userId'),
          userName: localStorage.getItem('manager_userName')
        })

        router.push('/home')
      } 
    }
  },[])

  return (
    <>
      <HeadPage titlePage={'Sign Up'}/>
      <Container>
        <LogoContainer>
          <Logo size={300}/>
          <p>Manager</p>
        </LogoContainer>
        <FormArea>
          <FormContainer>
            <SignUpForm/>
          </FormContainer>
        </FormArea>
      </Container>
    </>
  )
}

