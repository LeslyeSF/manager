import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 30px 0 30px 0;
  background-color: #10102D;
  color: white;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    padding: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
  @media (max-width: 800px) {
    width: 350px;
  }

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
    max-width: 500px;
    min-height: 400px;
  }
`

const FormContainer = styled.div`
  width: 400px;
  min-height: 400px;
  max-height: 90vh;
  background-color: #1D1D47;

  overflow: hidden;
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  align-items: center; 

  @media (max-width: 800px) {
    width: 100%;
    max-height: 1000px;
    padding: 20px;
    border-radius: 50px 50px 0 0;
  }
`

export { Container, LogoContainer, FormArea, FormContainer }