import { FormContainer, FooterLink, Title, DateInput } from '../styles/formStyle'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { cpfMask } from '../utils/cpfMask'
import { phoneMask } from '../utils/phoneMask'
import { signUp } from '../services/api'
import { useRouter } from 'next/router'


export default function SignUpForm(){
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    cpf: '',
    birthday: '',
    email: '',
    phone: '',
    password: ''
  })

  function submitForm(e){
    e.preventDefault()
  
    const body = {...form}
    body.phone = body.phone.replace(' ', '');
    if (body.phone === '') delete body.phone
    
    signUp(body)
    .then(()=>{
      Swal.fire(
        'Good job!',
        'Cadastro realizado com sucesso!',
        'success'
      )
      router.push('/')
    })
    .catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Falha ao realizar cadastro!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }
  
  return(
    <FormContainer>
      <Title>Cadastre-se!</Title>
      <form onSubmit={submitForm}>
        <input 
        type='text' 
        placeholder='Nome' 
        value={form.name}
        required 
        onChange={(e) => {
          form.name = e.target.value
          setForm({...form})
        }}/>
        <input 
        type='text' 
        placeholder='Cpf' 
        required
        value={form.cpf}
        onChange={(e) => {
          form.cpf = cpfMask(e.target.value)
          setForm({...form})
        }}/>
        <DateInput>
          <label>Data de nascimento</label>
          <input 
          type='date' 
          required
          value={form.birthday}
          onChange={(e) => {
            form.birthday = e.target.value
            setForm({...form})
          }}/>
        </DateInput>
        <input 
        type='email' 
        placeholder='Email' 
        required
        value={form.email}
        onChange={(e) => {
          form.email = e.target.value
          setForm({...form})
        }}/>
        <input 
        type='text' 
        placeholder='Telefone (Opcional)'
        value={form.phone}
        maxLength={15}
        onChange={(e) => {
          form.phone = phoneMask(e.target.value)
          setForm({...form})
        }}/>
        <input 
        type='password' 
        minLength={8}
        placeholder='Senha' 
        required
        value={form.password}
        onChange={(e) => {
          form.password = e.target.value
          setForm({...form})
        }}/>
        <label>Esqueceu sua senha?</label>
        <button>Cadastrar</button>
      </form>
      <Link href='/'>
        <FooterLink>Já tem uma conta? Faça o login!</FooterLink>
      </Link>
    </FormContainer>
  )
}

