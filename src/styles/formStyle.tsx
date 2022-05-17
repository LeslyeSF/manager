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
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap 30px;

  form {
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

export { FormContainer, Title, FooterLink, DateInput }