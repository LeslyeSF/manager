import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useAuth } from '../context/authContext'
import { getBankAccount, getCategories, getCreditCards, insertTransaction } from '../services/api'
import { ButtonsArea, FormContainer } from '../styles/formRegisterStyle'
import maskMoney from '../utils/moneyMask'


export default function TransactionRegisterForm(){
  const { token } = useAuth()
  const router = useRouter()
  const [form, setForm] = useState({
    description: '',
    categoryId: 1,
    creditCardId: 0,
    bankAccountId: 0,
    type: 'input',
    amount: ''
  })
  const [lists, setLists] = useState({
    cards:[],
    accounts:[],
    categories:[]
  })
  
  useEffect(()=>{
    getCreditCards(token)
    .then((ans)=>{
      const auxCards = ans.data.map((data) => {
        return(
          <option key={data.id} value={data.id}>{data.name}</option>
        )
      })
      lists.cards = auxCards
      setLists({...lists})
    })
    getBankAccount(token)
    .then((ans)=>{
      const auxAccounts = ans.data.map((data) => {
        return(
          <option key={data.id} value={data.id}>{data.bankName}</option>
        )
      })
      lists.accounts = auxAccounts
      setLists({...lists})
    })
    getCategories(token)
    .then((ans)=>{
      const auxCategories = ans.data.map((data) => {
        return(
          <option key={data.id} value={data.id}>{data.name}</option>
        )
      })
      lists.categories = auxCategories
      setLists({...lists})
    })
  },[])
  
  function submitForm(e){
    e.preventDefault()    
    const body = {
      description: form.description,
      type: form.type,
      categoryId: Number(form.categoryId),
      creditCardId: (form.creditCardId === 0)? null : Number(form.creditCardId),
      bankAccountId: (form.bankAccountId === 0)? null : Number(form.bankAccountId),
      amount: Number(form.amount.replace('.','').replace(',','').replace('R$ ',''))
    }
    console.log(body.creditCardId);
    
    if(!body.creditCardId) delete body.creditCardId
    if(!body.bankAccountId) delete body.bankAccountId
    
    insertTransaction(token, body)
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
        placeholder='Sorvete no King...' 
        value={form.description}
        onChange={e => {
          form.description = e.target.value
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
        <select required value={form.categoryId} onChange={(e)=>{
          form.categoryId = Number(e.target.value)
          setForm({...form})
        }}>
          {lists.categories}
        </select>
        <ButtonsArea name={['input', 'output']} selected={form.type}>
          <div onClick={()=>{
            form.type = 'input'
            setForm({...form})
          }}>
            Entrada
          </div>
          <div onClick={()=>{
            form.type = 'output'
            setForm({...form})
          }}>
            Saída
          </div>
        </ButtonsArea>
        <select value={form.creditCardId} onChange={(e)=>{
          form.creditCardId = Number(e.target.value)
          setForm({...form})
        }}>
          <option key={0} value={0}>none</option>
          {lists.cards}
        </select>
        <select onChange={(e)=>{
          form.bankAccountId = Number(e.target.value)
          setForm({...form})
        }}>
          <option key={0} value={0}>none</option>
          {lists.accounts}
        </select>
  
      </div>
      <div>
        <button>Cadastrar</button>
      </div>
    </FormContainer>
  )
}