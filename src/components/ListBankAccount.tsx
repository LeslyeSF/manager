/* eslint-disable react/jsx-key */
import { AiFillDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { deleteBankAccount, deleteTransactions, getBankAccount, getTransactions } from '../services/api'
import { useRouter } from 'next/router'
import { useAuth } from '../context/authContext'
import { List, ElementDiv, Name, Message} from '../styles/listStyle'

export default function ListBankAccount() {
  const { token } = useAuth()
  const router = useRouter()
  const [change, setChange] = useState(true)
  const [list, setList] = useState([]);

  useEffect(()=>{
    getBankAccount(token)
    .then((ans)=>{
      const auxList = ans.data.map((data)=>{        
        return (
          <ElementDiv key={data.id}>
            <Name>
              {data.bankName}
              <p>{data.accountNumber}</p>
            </Name>
            <div>
              <p>R$ {((data.amount)/100).toFixed(2)}</p>
            </div>
            <div className='delete' onClick={()=>deleteAccount(token, data.id)}>
              <AiFillDelete/>
            </div>
          </ElementDiv>
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
  
  function deleteAccount(token:string,id: number){
    deleteBankAccount(token,id)
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
        <Message>Nao ha transacoes</Message>
        : list
      }      
    </List>
  )
}
