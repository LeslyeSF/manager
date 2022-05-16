import { FormContainer, FooterLink, Title, DateInput } from '../styles/formStyle';
import Link from "next/link";

export default function SignUpForm(){
  return(
    <FormContainer>
      <Title>Cadastre-se!</Title>
      <form>
        <input type='text' placeholder='Nome' required/>
        <input type='text' placeholder='Cpf' required/>
        <DateInput>
          <label>Data de nascimento</label>
          <input type='date' required/>
        </DateInput>
        <input type='email' placeholder='Email' required/>
        <input type='text' placeholder='Telefone'/>
        <input type='password' placeholder='Senha' required/>
        <label>Esqueceu sua senha?</label>
        <button>Cadastrar</button>
      </form>
      <Link href='/'>
        <FooterLink>Já tem uma conta? Faça o login!</FooterLink>
      </Link>
    </FormContainer>
  );
}

