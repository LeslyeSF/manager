import styled from 'styled-components'

const Container = styled.div`
  width: 320px;
  min-height: 90vh;
  
  margin: 30px 15px 30px 15px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (max-width: 800px) {
    margin: 0;
    min-height: 50px;
    width: 100%;
  }
`
const SubContainer = styled.div`
  @media (max-width: 800px) {
    ${(props : createSubContainer) => (props.showMenu)?
      ``:`display:none;`
    }
  }
`
const LogoContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  pointer-events: auto;

  color: #FCFCFC;
  font-size: 40px;
  font-weight: 900;
  
  div:nth-child(2){
    display: flex;
    align-items: center;
    gap: 20px;
  }
  @media (max-width: 800px) {
    justify-content: space-between;
  }
  @media (max-width: 450px) {
    justify-content: space-between;
    div:nth-child(2){
      display: flex;
      align-items: center;
      gap: 20px;
      p{
        display: none;
      }
    }
  }

`

const MenuButton = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    margin: 0;
  }
`

const UserProfile = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p{
    color: #6AEAF5;
    font-size: 25px;
    font-weight: 800;
    text-align: center;
  }
`
const FramePhoto = styled.div`
  width: 80px;
  height: 80px;

  background-color: #6AEAF5;

  color: #10102D;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 40px;
  font-weight: 700;

  border-radius: 50%;

  box-shadow: 3px 2px 6px 3px rgba(106,234,245,0.1);

  #image{
    border-radius: 50%;
  }
`
const MenuOptions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;

  padding: 0 0 0 10px;
  h1 {
    color: #FCFCFC;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
  }
  div {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    color: #FCFCFC;
    font-size: 20px;
    font-weight: 500;
    padding: 0 0 0 20px;
  }
  div:hover{
    cursor: pointer;
    color: #6AEAF5;
    background-color: #1D1D47;
  }
  @media (max-width: 800px) {
    align-items: center;
    padding: 0;
    div{
      justify-content: center;
      padding: 0;
    }
  }
`
const Option = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  color: #FCFCFC;
  font-size: 20px;
  font-weight: 500;
  padding: 0 0 0 10px;

  &:hover{
    cursor: pointer;
    color: #6AEAF5;
    background-color: #1D1D47;
  }
`

interface createSubContainer{
  showMenu: boolean
}
export { 
  Container, 
  LogoContainer, 
  UserProfile, 
  FramePhoto, 
  MenuOptions, 
  Option,
  SubContainer,
  MenuButton
 }