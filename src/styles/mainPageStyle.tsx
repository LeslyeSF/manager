import styled from 'styled-components'

const MenuSection = styled.div`
  width: 340px;
`

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh; 

  overflow: hidden;

  display: flex;
`
const MainSection = styled.div`
  min-height: 100%;
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

export { HomeContainer, MainSection, TitleSection, MenuSection };