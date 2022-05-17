import { FormContainer, FooterLink, Title } from '../styles/formStyle'
import Link from 'next/link'

export default function SignInForm(){
  return(
    <FormContainer>
      <Title>Que bom que você voltou!</Title>
      <form>
        <input type='text' placeholder='Email, cpf ou telefone'/>
        <input type='password' placeholder='Senha'/>
        <label>Esqueceu sua senha?</label>
        <button>Entrar</button>
      </form>
      <Link href='/sign-up'>
        <FooterLink>Ainda não tem conta? Cadastre-se</FooterLink>
      </Link>
    </FormContainer>
  )
}

