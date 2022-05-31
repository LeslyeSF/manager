import styled from 'styled-components'

const Title = styled.p`
  width: 250px;
  color: #6AEAF5;
  font-size: 30px;
  font-weight: 800;

  text-align: center;
`

const FooterLink = styled.p`
  width: 300px;
  color: #6AEAF5;
  font-size: 15px;
  font-weight: 400;

  text-align: center;
  &:hover {
    cursor: pointer;
  }
`

const FormContainer = styled.div`
  width: 100%;

  padding: 30px;

  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap 30px;

  ::-webkit-scrollbar-track
  {
    border: 5px solid white;
    background-color: #b2bec3;
  }

  ::-webkit-scrollbar
  {
    width: 6px;
    background-color: #dfe6e9;
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: #74b9ff;
    border-radius: 20px;
  }

  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap 20px;

    input{
      all: unset;

      height: 40px;
      padding: 5px 10px 5px 10px;
      border-radius: 10px;

      color: #1D1D47;
      font-weight: 600;

      background-color: #FCFCFC;
    }
    input::placeholder{
      color: #4EA7B9;
      font-weight: 600;
    }
    label {
      align-self: end;
      color: #4EA7B9;
      font-weight: 600;
    }
    button {
      width: 130px;
      heigth: 40px;

      background-color: #6AEAF5;

      border-radius: 5px;
      border: 0;

      color: #1D1D47;
      font-size: 20px;
      font-weight: 800;
    }
    button:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    overflow: visible;
    padding: 0px 10px 0px 10px;    
  }
`

const DateInput = styled.div`
  display: flex;
  gap: 20px;

  label {
    width: 100px;
    color: #4EA7B9;
    font-weight: 600;
  }
  input{
    width: 150px;
    height: 20px;
    border-radius: 10px;

    color: #1D1D47;
    font-weight: 600;

    background-color: #FCFCFC;
  }
  input::placeholder{
    color: #4EA7B9;
    font-weight: 600;
  }
`
const ConfirmPassword = styled.p`
  ${(props : confirm) => 
    (props.confirmPassword === '')?
    `display: none;`:
    (props.confirmPassword !== props.password)?
    `color: red;`:
    `color: green;`
  }
`

interface confirm {
  password: string
  confirmPassword: string
}

export { FormContainer, Title, FooterLink, DateInput, ConfirmPassword }