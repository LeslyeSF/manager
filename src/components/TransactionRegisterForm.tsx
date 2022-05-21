import { useState } from 'react'
import { FormContainer } from '../styles/formRegisterStyle'
import maskMoney from '../utils/moneyMask'


export default function TransactionRegisterForm(){
  const [form, setForm] = useState({
    bankName: '',
    accountNumber: '',
    type: 'input',
    amount: ''
  })
  console.log(form.type);
  
  return(
    <FormContainer>
      <div>
        <label>Descrição:</label>
        <label>Valor:</label>
        <label>Categoria:</label>
        <label>Tipo:</label>
        <label>Cartão de crédito:</label>
        <label>Conta bancária:</label>
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
        placeholder='R$ 0,00'
        value={form.amount}
        onChange={e => {          
          form.amount = maskMoney(e.target.value)
          setForm({...form})
        }}
        maxLength={17}
        required/>
        <select>
          <option>1</option>
          <option>2</option>
        </select>
        <div className='radioSection'>
          <input 
          name='type' 
          type='radio' 
          value='input' 
          checked 
          />
          <label>Entrada</label>
          <input  
          name='type' 
          type='radio' 
          value='output' 
          />
          <label>Saída</label>
        </div>
        <select>
          <option>1</option>
          <option>2</option>
        </select>
        <select>
          <option>1</option>
          <option>2</option>
        </select>
  
      </div>
      <div>
        <button>Cadastrar</button>
      </div>
    </FormContainer>
  )
}