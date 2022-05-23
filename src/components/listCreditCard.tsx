/* eslint-disable react/jsx-key */
import { AiFillDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { deleteBankAccount, deleteCreditCard, getCreditCards } from '../services/api'
import { useRouter } from 'next/router'
import { useAuth } from '../context/authContext'
import { List, ElementDiv, Name, Message} from '../styles/listStyle'

export default function ListCreditCard() {
  const { token } = useAuth()
  const router = useRouter()
  const [change, setChange] = useState(true)
  const [list, setList] = useState([]);

  useEffect(()=>{
    getCreditCards(token)
    .then((ans)=>{
      const auxList = ans.data.map((data)=>{        
        return (
          <ElementDiv key={data.id}>
            <Name>
              {data.name}
              <p>{data.number}</p>
            </Name>
            <div>
              <p>Último dia para pagamento: {data.lastPaymentDay}</p>
            </div>
            <div className='delete' onClick={()=>deleteCard(token, data.id)}>
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
  
  function deleteCard(token:string,id: number){
    deleteCreditCard(token,id)
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
