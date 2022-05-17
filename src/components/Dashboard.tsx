import styled from 'styled-components'
import { PieChart } from 'react-minimal-pie-chart'

export default function Dashboard(){
  return(
    <Container>
      <Title>Dashboard</Title>
      <PieChart
   animation
   animationDuration={500}
   animationEasing="ease-out"
   center={[50, 50]}
   data={[
     {
     color: "#E38627",
     title: "One",
     value: 10,
     },
     {
     color: "#C13C37",
     title: "Two",
     value: 15,
     },
     {
     color: "#6A2135",
     title: "Three",
     value: 20,
     },
   ]}
   labelPosition={50}
   lengthAngle={360}
   lineWidth={15}
   paddingAngle={0}
   radius={50}
   rounded
   startAngle={0}
   viewBoxSize={[100, 100]}
      />

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items; start;
`
const Title = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #10102D;
`
const HeaderDashboard = styled.div`

  min-height: 200px;

  display: flex;
`