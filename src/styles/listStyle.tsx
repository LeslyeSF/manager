import styled from 'styled-components'
const List = styled.div`
width: 100%;

box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.06);

::-webkit-scrollbar-track
  {
    margin-top: 10px;
    margin-bottom: 10px;
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

border-radius: 50px;

diaply: flex;
flex-direction: column;
align-items: center;
gap: 1px;

div:nth-child(1){
  border-top: 0;
}
`

const ElementDiv = styled.div`
width: 100%;
min-height: 100px;
position: relative;

padding: 10px 30px 10px 30px;

border-top: 1px solid #10102D;

display: flex;
flex-direction: column;
gap: 5px;

font-size: 15px;

color: #10102D;

div{
  display: flex;
  justify-content: flex-start;
  gap: 30px;
}

.delete{
  position: absolute;
  top: 30px;
  right: 30px;

  font-size: 20px;

  color: #6AEAF5;
}

.delete:hover{
  cursor: pointer;
}

`

const Name = styled.p`
font-size: 20px;
font-weight: 700;

display: flex;
flex-direction: column;

p{
  font-size: 10px;
  font-weight: 500;
}
`

const Message = styled.span`
margin-left: 30px;
font-weight: 700;
color: #10102D;
font-size: 50px;
`


export { List, ElementDiv, Name, Message}