import { FormContainer, FooterLink, Title, DateInput } from '../styles/formStyle'
import Link from 'next/link'
import { useState } from 'react'
import { cpfMask } from '../utils/cpfMask'
import { phoneMask } from '../utils/phoneMask'

export default function SignUpForm(){
  const [form, setForm] = useState({
    name: '',
    cpf: '',
    birthday: '',
    email: '',
    phone: '',
    password: ''
  })
  
  return(
    <FormContainer>
      <Title>Cadastre-se!</Title>
      <form>
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
        placeholder='Telefone'
        value={form.phone}
        maxLength={15}
        onChange={(e) => {
          form.phone = phoneMask(e.target.value)
          setForm({...form})
        }}/>
        <input 
        type='text' 
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

