import { FormContainer, FooterLink, Title } from '../styles/formStyle'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/authContext'
import Loading from './Loading'
import { submitFormSignIn } from '../services/submitForms'

export default function SignInForm(){
  const { updateToken, updateUser } = useAuth()
  const router = useRouter()
  const [form, setForm] = useState({
    userData: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  return(
    <>
      {(loading)? <Loading width={300} height={300} color={'#F4F9F5'}/> 
      :<FormContainer>
        <Title>Que bom que você voltou!</Title>
        <form onSubmit={(e) => submitFormSignIn(e, {setLoading, form, updateToken, updateUser, router})}>
          <input 
          type='text' 
          placeholder='Email, cpf ou telefone' 
          required
          value={form.userData}
          onChange={e =>{
            form.userData = e.target.value
            setForm({...form})
          }}/>
          <input 
          type='password' 
          placeholder='Senha' 
          required
          value={form.password}
          onChange={e =>{
            form.password = e.target.value
            setForm({...form})
          }}/>
          <label>Esqueceu sua senha?</label>
          <button>Entrar</button>
        </form>
        <Link href='/sign-up'>
          <FooterLink>Ainda não tem conta? Cadastre-se</FooterLink>
        </Link>
      </FormContainer>
    }
    </> 
  )
}

