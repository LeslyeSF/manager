import styled from 'styled-components'

const FormContainer = styled.form`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 10px;

  position: relative;

  color: #10102D;

  label{
    font-weight: 600;
    height: 50px;
    display:flex;
    align-items:center;
  }

  input[type=text], input[type=number]{
    all: unset;

    height: 40px;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;

    color: #6AEAF5;
    font-weight: 600;

    background-color: #10102D;
  }
  input::placeholder{
    color: #4BA7B7;
    font-weight: 600;
    font-style: italic;
  }
  
  button {
    align-self: center;
    width: 300px;
    heigth: 200px;

    margin-top: 50px;

    background-color: #4BA7B7;

    border-radius: 5px;
    border: 0;

    color: #1D1D47;
    font-size: 20px;
    font-weight: 800;
  }
  button:hover {
    cursor: pointer;
    background-color: #6AEAF5;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div:nth-child(1){
    align-items: end;
    margin-bottom: 100px;
  }
  div:nth-child(2){
    align-items: start;
    margin-bottom: 100px;
  }
  div:nth-child(3){
    position: absolute;
    bottom: 0;
  }

  select {
    width: 200px;
    height: 50px;

    background-color: #10102D;

    color: #6AEAF5;
    font-weight: 600;
  }

  .radioSection{
    margin: 0;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: 45px;
    padding: 10px;

  }
 
`

export { FormContainer };