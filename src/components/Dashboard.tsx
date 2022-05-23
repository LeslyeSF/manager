import styled from 'styled-components'
import { PieChart } from 'react-minimal-pie-chart'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import randomColor from 'randomcolor'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { IoEyeSharp } from 'react-icons/io5'
import { getDashboard, getTransactions } from '../services/api'
import { useRouter } from 'next/router'
import { useAuth } from '../context/authContext'

export default function Dashboard(){
  const { token } = useAuth()
  const router = useRouter()
  const [showData, setShowData] = useState(false)
  const [list, setList] = useState([])
  const [lists, setLists] = useState({
    card: [],
    bank: []
  })
  const [listLegend, setListLegend] = useState([])
  const [listData, setListData] = useState({
    revenue:0,
    outlay:0,
    transactions:[]
  })

  useEffect(()=>{
    getDashboard(token)
    .then((ans)=>{
      setListData(ans.data)      
      createListData(ans.data.transactions)
    })
    .catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao carregar dados!'
      })
    })
  },[])

  function createListData(lst: graphDatas[]){
    const newlst = lst.map((data) => ({
      color: (data.type === 'input')? randomColor({luminosity: 'dark', hue: 'green'}) : randomColor({luminosity: 'dark', hue: 'blue'}),
      title: `${data.description} - ${data.category}`,
      value: data.amount,
      type: data.type
    })) 
    const legendList = newlst.map((data, index) => (
    <Legend key={index} color={data.color}>
      {(data.type === 'input')? <BsFillArrowUpCircleFill/> : <BsFillArrowDownCircleFill/>}
      {data.title}
    </Legend>
    ))

    const card = lst.filter((data) => data.creditCard)
    const bank = lst.filter((data) => data.bankAccount)
    
    
    lists.card = card.map((data, i) => 
    <Info key={i} type={data.type}>
      {(data.type === 'input')? <BsFillArrowUpCircleFill/> : <BsFillArrowDownCircleFill/>}
      {` ${data.creditCard}`} - {data.description}
    </Info>
    )

    lists.bank = bank.map((data, i) => 
    <Info key={i} type={data.type}>
      {(data.type === 'input')? <BsFillArrowUpCircleFill/> : <BsFillArrowDownCircleFill/>}
      {` ${data.bankAccount}`} - {data.description}
    </Info>
    )
    setLists({...lists})
    setListLegend(legendList)
    setList(newlst)
  }

  return(
    <Container>
      <Title>Dashboard</Title>
      <DashInfo show={showData}>
        <p><BsFillArrowUpCircleFill/> Receita: R$ {((listData.revenue)/100).toFixed(2)}</p>
        <p><BsFillArrowDownCircleFill/> Gastos: R$ {((listData.outlay)/100).toFixed(2)}</p>
        <div onClick={()=>setShowData(!showData)}>
          {(showData)? <IoEyeSharp/> : <BsFillEyeSlashFill/>}
        </div>
      </DashInfo>
      <GraphArea>
        <p>Transações</p>
        <div>
          <PieChart
          animationDuration={500}
          animationEasing="ease-out"
          center={[50, 50]}
          data={list}
          labelPosition={50}
          lengthAngle={360}
          lineWidth={15}
          paddingAngle={0}
          radius={50}
          rounded
          startAngle={0}
          viewBoxSize={[100, 100]}
          />
          <LegendArea>
            {listLegend}
          </LegendArea>
        </div>
      </GraphArea>
      <SecodaryArea>
        <div>
          <p>Cartão de crédito</p>
          {lists.card}
        </div>
        <div>
          <p>Conta bancária</p>
          {lists.bank}
        </div>
      </SecodaryArea>

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items; start;
  gap: 20px;

  ::-webkit-scrollbar-track
  {
    border: 5px solid white;
    // border color does not support transparent on scrollbar
    // border-color: transparent;
    background-color: #b2bec3;
  }

  ::-webkit-scrollbar
  {
    width: 5px;
    background-color: #dfe6e9;
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: #74b9ff;
    border-radius: 10px;
  }
`
const Title = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #10102D;
`

const DashInfo = styled.div`
  width: 400px;
  min-height: 100px;

  background-color: #F4F9F5;

  border-radius: 25px;

  overflow: hidden;

  position: relative;

  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.06);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;

  p{ 
    width: 300px;
    height: 50px;
    margin: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    
    font-size: 20px;
  }

  ${(props: showDataDash) => (props.show) ?
    `p:nth-child(1){
      color: green;
    }
    p:nth-child(2){
      color: red;
    }`
    :`p:nth-child(1), p:nth-child(2) {
      color: #6AEAF5;
      background-color: #6AEAF5;
      }
    `
  }
  div{
    position: absolute;
    right: 30px;
    top: 35px;
    color: #10102D;
    font-size: 30px;
  }
`
const HeaderDashboard = styled.div`

  min-height: 200px;

  display: flex;
`

const GraphArea = styled.div`
  width: 100%;
  height: 200px;
  color: #10102D;
  border-top: 1px solid #10102D;
  text-align: center;
  font-weight: 700;
  div{
    Width: 100%;
    height: 170px;
    display: flex;
    align-items: start;
    justify-content: space-around;
    gap: 20px;
  }
`
const LegendArea = styled.div`
  min-width: 400px;
  height: 200px;

  padding: 30px 0 0 0;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  color: #000000;
  
  ::-webkit-scrollbar-track
  {
    border: 5px solid white;
    // border color does not support transparent on scrollbar
    // border-color: transparent;
    background-color: #b2bec3;
  }

  ::-webkit-scrollbar
  {
    width: 5px;
    background-color: #dfe6e9;
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: #74b9ff;
    border-radius: 10px;
  }
`

const Legend = styled.p`
  color: ${(props: legendColor) => props.color};
  font-size: 15px;
  font-weight: 700;
  display: flex;
  gap: 5px;
`

const SecodaryArea = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #10102D;

  div{
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #10102D;
    p{
      font-size: 15px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 10px;
    }
  }
  div:nth-child(1){
    border-right: 1px solid #10102D;
  }
`
const Info = styled.p`
  color: ${(props: partialGraphDatas) => 
    (props.type === 'input')? 'green' : 'red'
  };
`

interface showDataDash {
  show: boolean
}

interface graphDatas {
  description: string
  amount: number
  type: string
  category: string
  creditCard: string
  bankAccount: string
}

type partialGraphDatas = Partial<graphDatas>

interface legendColor {
  color: string
}