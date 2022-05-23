import { useState } from 'react'
import { FormContainer } from '../styles/formRegisterStyle'
import Swal from 'sweetalert2'
import { insertCreditCard } from '../services/api'
import { useRouter } from 'next/router'
import { useAuth } from '../context/authContext'

export default function CreditCardRegisterForm(){
  const { token } = useAuth()
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    number: '',
    lastPaymentDay: '',
    gracePeriod: ''
  })

  function submitForm(e){
    e.preventDefault()
    const body = {
      name :  form.name,
      number: form.number,
      lastPaymentDay: Number(form.lastPaymentDay),
      gracePeriod: Number(form.gracePeriod)
    }
    
    insertCreditCard(token, body)
    .then(()=>{
      Swal.fire(
        'Good job!',
        'Cartao cadastrado!',
        'success'
      )
      router.push('/home')
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
    <FormContainer onSubmit={submitForm}>
      <div>
        <label>Nome do cartão:</label>
        <label>Número do cartão:</label>
        <label>Último dia de pagamento:</label>
        <label>Período de carência:</label>
      </div>
      <div>
        <input 
        type='text'
        placeholder='Ex: nubank, JSX...' 
        value={form.name}
        onChange={e => {
          form.name = e.target.value
          setForm({...form})
        }}
        required/>
        <input 
        type='text'
        placeholder='0000 0000 0000 0000' 
        value={form.number}
        onChange={e => {
          form.number = e.target.value
          setForm({...form})
        }}
        required/>
        
        <input 
        type='number'
        placeholder='' 
        min={1}
        max={31}
        value={form.lastPaymentDay}
        onChange={e => {
          form.lastPaymentDay = e.target.value
          setForm({...form})
        }}
        required/>
        <input 
        type='number'
        placeholder='' 
        min={1}
        max={11}
        value={form.gracePeriod}
        onChange={e => {
          form.gracePeriod = e.target.value
          setForm({...form})
        }}
        required/>
      </div>
      <div>
        <button>Cadastrar</button>
      </div>
    </FormContainer>
  )
}
