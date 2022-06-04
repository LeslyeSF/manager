import styled from 'styled-components'

const MenuSection = styled.div`
  width: 340px;
  
  @media (max-width: 800px) {
    width: 100%;
    padding: 20px 10px 0 10px;
    .logoButton {
      display: flex;
    }
  }
`
const LogoContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;

  p{
    color: #FCFCFC;
    font-size: 40px;
    font-weight: 900;
  }
`

const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh; 

  overflow: hidden;

  display: flex;
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const MainSection = styled.div`
  height: 100vh;
  flex-grow: 1;

  overflow-y: scroll;

  border-radius: 50px 0 0 50px;

  background-color: #F4F9F5;
  padding: 40px;

  display: flex;
  flex-direction: column;

  align-items: start;
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
  @media (max-width: 800px) {
    border-radius: 50px 50px 0 0;
    height: auto;
    overflow: auto;
  }

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

export { 
  HomeContainer, 
  MainSection, 
  TitleSection, 
  MenuSection, 
  LogoContainer
};