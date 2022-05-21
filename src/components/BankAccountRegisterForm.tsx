import { useState } from 'react'
import { FormContainer } from '../styles/formRegisterStyle'
import maskMoney from '../utils/moneyMask'

export default function BankAccountRegisterForm(){
  const [form, setForm] = useState({
    bankName: '',
    accountNumber: '',
    amount: ''
  })
  
  return(
    <FormContainer>
      <div>
        <label>Nome do banco:</label>
        <label>Número da conta:</label>
        <label>Saldo atual:</label>
      </div>
      <div>
        <input 
        type='text'
        placeholder='Ex: Bradesco, caixa...' 
        value={form.bankName}
        onChange={e => {
          form.bankName = e.target.value
          setForm({...form})
        }}
        required/>
        <input 
        type='text'
        placeholder='0000 0000 0000 0000' 
        value={form.accountNumber}
        onChange={e => {
          form.accountNumber = e.target.value
          setForm({...form})
        }}
        required/>
        <input
        type='text'
        placeholder='R$ 0,00'
        value={form.amount}
        onChange={e => {          
          form.amount = maskMoney(e.target.value)
          setForm({...form})
        }}
        maxLength={17}
        required/>
      </div>
      <div>
        <button>Cadastrar</button>
      </div>
    </FormContainer>

  )
}
