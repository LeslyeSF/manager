import { FormContainer, FooterLink, Title } from '../styles/formStyle'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import { signIn } from '../services/api'
import { useAuth } from '../context/authContext'

export default function SignInForm(){
  const { updateToken, updateUser } = useAuth()
  const router = useRouter()
  const [form, setForm] = useState({
    userData: '',
    password: ''
  })

  function submitForm(e){
    e.preventDefault()
    signIn(form)
    .then((ans)=>{
      updateToken(ans.data.token)
      updateUser({
        userId: ans.data.userId,
        userName: ans.data.userName
      })
      localStorage.setItem('managerToken', ans.data.token)
      localStorage.setItem('manager_userId', ans.data.userId)
      localStorage.setItem('manager_userName', ans.data.userName)
      Swal.fire(
        'Good job!',
        'Login realizado com sucesso!',
        'success'
      )
      router.push('/home')
    })
    .catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario ou senha incorreta!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }

  return(
    <FormContainer>
      <Title>Que bom que você voltou!</Title>
      <form onSubmit={submitForm}>
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
  )
}

