import { useState } from 'react'
import { FormContainer } from '../styles/formRegisterStyle'

export default function CreditCardRegisterForm(){
  const [form, setForm] = useState({
    name: '',
    number: '',
    lastPaymentDay: '',
    gracePeriod: ''
  })

  return(
    <FormContainer>
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
