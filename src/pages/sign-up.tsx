/* eslint-disable @next/next/no-page-custom-font */
import Logo from '../components/Logo';
import HeadPage from '../components/HeadPage';
import SignUpForm from '../components/SignUpForm';
import { Container, LogoContainer, FormArea, FormContainer } from '../styles/authPageStyle';

export default function SignUp() {
  return (
    <>
      <HeadPage titlePage={'Sign Up'}/>
      <Container>
        <LogoContainer>
          <Logo size={300}/>
          <p>Manager</p>
        </LogoContainer>
        <FormArea>
          <FormContainer>
            <SignUpForm/>
          </FormContainer>
        </FormArea>
      </Container>
    </>
  );
}

