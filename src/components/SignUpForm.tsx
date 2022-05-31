import { FormContainer, FooterLink, Title, DateInput, ConfirmPassword } from '../styles/formStyle'
import Link from 'next/link'
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import { cpfMask } from '../utils/cpfMask'
import { phoneMask } from '../utils/phoneMask'
import { useRouter } from 'next/router'
import Loading from './Loading'
import { submitFormSignUp } from '../services/submitForms'


export default function SignUpForm(){
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    cpf: '',
    birthday: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  
  return(
    <>
      {(loading)? <Loading width={300} height={300} color={'#F4F9F5'}/> 
      :<FormContainer>
        <Title>Cadastre-se!</Title>
        <form onSubmit={(e) => submitFormSignUp(e, {setLoading, form, router})}>
          <input 
            type='text' 
            placeholder='Nome' 
            value={form.name}
            required 
            onChange={(e) => {
              form.name = e.target.value
              setForm({...form})
            }}
          />
          <input 
            type='text' 
            placeholder='Cpf' 
            required
            value={form.cpf}
            onChange={(e) => {
              form.cpf = cpfMask(e.target.value)
              setForm({...form})
            }}
          />
          <DateInput>
            <label>Data de nascimento</label>
            <input 
              type='date' 
              required
              value={form.birthday}
              onChange={(e) => {
                form.birthday = e.target.value
                setForm({...form})
              }}
            />
          </DateInput>
          <input 
            type='email' 
            placeholder='Email' 
            required
            value={form.email}
            onChange={(e) => {
              form.email = e.target.value
              setForm({...form})
            }}
          />
          <input 
            type='text' 
            placeholder='Telefone (Opcional)'
            value={form.phone}
            maxLength={15}
            onChange={(e) => {
              form.phone = phoneMask(e.target.value)
              setForm({...form})
            }}
          />
          <input 
            type='password' 
            minLength={8}
            placeholder='Senha' 
            required
            value={form.password}
            onChange={(e) => {
              form.password = e.target.value
              setForm({...form})
            }}
          />  
          <input
            type='password' 
            minLength={8}
            placeholder='Digite a senha novamente' 
            required
            value={form.confirmPassword}
            onChange={(e) => {
              form.confirmPassword = e.target.value
              setForm({...form})
            }}
          />
          <ConfirmPassword 
            password={form.password}
            confirmPassword={form.confirmPassword}
          >
            {(form.confirmPassword !== form.password)?
            <><AiFillCloseCircle/> Senhas diferentes</>:
            <><AiFillCheckCircle/> Senhas iguais</>
            }
          </ConfirmPassword>  
          <label>Esqueceu sua senha?</label>
          <button>Cadastrar</button>
        </form>
        <Link href='/'>
          <FooterLink>Já tem uma conta? Faça o login!</FooterLink>
        </Link>
      </FormContainer>
    }
    </>
  )
}

