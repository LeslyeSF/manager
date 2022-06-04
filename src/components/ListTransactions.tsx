/* eslint-disable react/jsx-key */
import { AiFillDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { deleteTransactions, getTransactions } from '../services/api'
import { useRouter } from 'next/router'
import { useAuth } from '../context/authContext'
import { List, TransactionDiv, Description, Message} from '../styles/listTransactionStyle'

export default function ListTransactions() {
  const { token } = useAuth()
  const router = useRouter()
  const [change, setChange] = useState(true)
  const [list, setList] = useState([]);

  useEffect(()=>{
    getTransactions(token)
    .then((ans)=>{
      console.log(token)
      const auxList = ans.data.map((data)=>{        
        return (
          <TransactionDiv type={data.type} key={data.id}>
            <Description>
              {data.description} - data
              <p>{data.category.name}</p>
            </Description>
            <div>
              <p>R$ {((data.amount)/100).toFixed(2)}</p>
              {(!data.creditCard)? '' : <p>{data.creditCard.name}</p>}
              {(!data.bankAccount)? '' : <p>{data.bankAccount.bankName}</p>}
            </div>
            <div className='delete' onClick={()=>deleteTransaction(token, data.id)}>
              <AiFillDelete/>
            </div>
          </TransactionDiv>
        )
      })
      setList(auxList)      
    })
    .catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao carregar dados!'
      })
    })
  },[change])
  
  function deleteTransaction(token:string,id: number){
    deleteTransactions(token,id)
    .then(()=>{
      setChange(!change)
    })
    .catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao deletar!'
      })
    })
  }


  return (
    <List>
      {(list.length === 0)?
        <Message>Não há transações</Message>
        : list
      }      
    </List>
  )
}
