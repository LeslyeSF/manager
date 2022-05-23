import { useRouter } from 'next/router'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useAuth } from '../context/authContext'
import { insertBankAccount } from '../services/api'
import { FormContainer } from '../styles/formRegisterStyle'
import maskMoney from '../utils/moneyMask'

export default function BankAccountRegisterForm(){
  const { token } = useAuth()
  const router = useRouter()
  const [form, setForm] = useState({
    bankName: '',
    accountNumber: '',
    amount: ''
  })

  function submitForm(e){
    e.preventDefault()    
    const body = {
      bankName: form.bankName,
      accountNumber: form.accountNumber,
      amount: Number(form.amount.replace('.','').replace(',','').replace('R$ ',''))
    }
    
    insertBankAccount(token, body)
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
