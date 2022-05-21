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

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`
const TitleSection = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #10102D;

  span{
    font-weight: 600;
    color: #4BA7B7;
  }
`;

export { HomeContainer, MainSection, TitleSection };