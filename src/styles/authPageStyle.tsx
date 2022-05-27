import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #10102D;
  color: white;
  display: flex;

  @media (max-width: 800px) {
    width: 100%;
    min-height: 100vh;
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const LogoContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: #FCFCFC;
  font-size: 70px;
  font-weight: 900;
`

const FormArea = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const FormContainer = styled.div`
  width: 400px;
  min-height: 400px;
  background-color: #1D1D47;

  border-radius: 50px;

  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center; 

  @media (max-width: 800px) {
    width: 100%;
    padding: 20px;
    min-height: 400px;
    border-radius: 50px 50px 0 0;
  }
`

export { Container, LogoContainer, FormArea, FormContainer }