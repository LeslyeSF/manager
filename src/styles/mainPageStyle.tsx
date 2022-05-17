import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh; 

  display: flex;
`
const MainSection = styled.div`
  min-height: 95vh;
  flex-grow: 1;

  border-radius: 50px 0 0 50px;

  background-color: #F4F9F5;
  padding: 40px;
`
export { HomeContainer, MainSection }